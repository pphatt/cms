"use client"

import React from "react"
import type { AcademicYear, Faculty } from "@prisma/client"
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  type ChartData,
} from "chart.js"
import { Bar } from "react-chartjs-2"

import type { ContributionsWithAcademicYear } from "@/lib/prisma"
import { getRandomColor } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import styles from "@/styles/components/dashboard/marketing-manager/contribution-percentage-chart.module.scss"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    tooltip: {
      callbacks: {
        label: (value: { label: string; formattedValue: string }) => {
          const percentage = `${value.label}: ${value.formattedValue}%`
          return percentage
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Percentage of Contributions %",
      },
      max: 100,
    },
    y: {
      title: {
        display: true,
        text: "Faculty",
      },
    },
  },
}

interface ContributionPercentageChartProps {
  contributions: ContributionsWithAcademicYear[]
  faculty: Faculty[]
  academicYear: AcademicYear[]
}

export function ContributionPercentageChart({
  contributions,
  faculty,
  academicYear,
}: ContributionPercentageChartProps) {
  const [select, setSelect] = React.useState(academicYear[0]?.id ?? "")

  const getTheSameAcademicYearContributions = contributions.find(
    ({ id }) => id === select
  )!

  const data: ChartData<"bar"> = {
    labels: faculty.map(({ name }) => name),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    datasets: faculty.map(({ id, name }) => {
      let total = 0

      total += getTheSameAcademicYearContributions.contributions.filter(
        ({ facultyId }) => facultyId === id
      ).length

      const totalBlogsInYear = getTheSameAcademicYearContributions.contributions.length

      const percentageData = Math.round((total / totalBlogsInYear) * 100)

      return {
        label: name,
        data: [{ x: percentageData, y: name }],
        fill: true,
        grouped: false,
        borderWidth: 1,
        backgroundColor: `rgba(${getRandomColor()})`,
      }
    }),
  }

  return (
    <div className={styles["wrapper"]}>
      <h2 className={styles["text"]}>Percentage of Contributions</h2>

      <Select value={select} onValueChange={setSelect}>
        <SelectTrigger className={styles["select"]}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {academicYear.map(({ id, name }) => (
            <SelectItem value={id}>{name}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Bar className={styles["chart"]} options={options} data={data} />
    </div>
  )
}
