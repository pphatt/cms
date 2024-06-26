"use client"

import * as React from "react"
import type { AcademicYear, Prisma } from "@prisma/client"
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js"
import { Pie } from "react-chartjs-2"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import styles from "@/styles/components/dashboard/marketing-coordinator/status-percentage.module.scss"

ChartJS.register(ArcElement, Tooltip, Legend)

const options: ChartOptions<"pie"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    tooltip: {
      callbacks: {
        label: (value) => {
          const parserValue = value as { raw: string; label: string }
          const percentage = `${parserValue.label}: ${parserValue.raw}%`
          return percentage
        },
      },
    },
  },
}

interface StatusPercentageChartProps {
  contributions: Prisma.ContributionsGetPayload<{
    include: {
      faculty: true
      academicYear: true
    }
  }>[]
  academicYears: AcademicYear[]
}

export function StatusPercentageChart({
  contributions,
  academicYears,
}: StatusPercentageChartProps) {
  const [selectAcademicYear, setSelectAcademicYear] =
    React.useState("all-academic-year")

  const totalContributions = contributions.filter(({ academicYearId }) => {
    if (selectAcademicYear === "all-academic-year") {
      return true
    } else {
      return academicYearId === selectAcademicYear
    }
  })

  const approveTotal = totalContributions.filter(
    ({ status }) => status === "APPROVE"
  ).length

  const rejectTotal = totalContributions.filter(
    ({ status }) => status === "REJECT"
  ).length

  const pendingTotal = totalContributions.filter(
    ({ status }) => status === "PENDING"
  ).length

  const data: ChartData<"pie"> = {
    labels: ["Accept", "Reject", "Pending"],
    datasets: [
      {
        label: "Percentage of Contributions Status",
        data: [
          Math.round((approveTotal / totalContributions.length) * 100),
          Math.round((rejectTotal / totalContributions.length) * 100),
          Math.round((pendingTotal / totalContributions.length) * 100),
        ],
        borderWidth: 1,
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(173, 167, 159, 0.5)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(173, 167, 159, 1)",
        ],
      },
    ],
  }

  return (
    <div className={styles["wrapper"]}>
      <h2 className={styles["text"]}>Blog Status Percentage</h2>

      <div className={styles["filter-wrapper"]}>
        <Select
          value={selectAcademicYear}
          onValueChange={setSelectAcademicYear}
        >
          <SelectTrigger className={styles["select"]}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[
              { id: "all-academic-year", name: "All academic year" },
              ...academicYears,
            ].map(({ id, name }) => (
              <SelectItem value={id}>{name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className={styles["chart-wrapper"]}>
        <Pie className={styles["chart"]} options={options} data={data} />
      </div>
    </div>
  )
}
