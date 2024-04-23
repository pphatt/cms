"use client"

import * as React from "react"
import type { AcademicYear, Faculty, Prisma } from "@prisma/client"
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
  type ChartData,
} from "chart.js"
import { Pie } from "react-chartjs-2"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import styles from "@/styles/components/dashboard/blog-status-percentage.module.scss"

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ["Accept", "Reject", "Pending"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgb(245, 239, 230, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(75, 192, 192, 1)",
        "rgb(245, 239, 230, 1)",
      ],
      borderWidth: 1,
    },
  ],
}

interface BlogStatusPercentageChartProps {
  contributions: Prisma.BlogsGetPayload<{
    include: {
      faculty: true
      academicYear: true
    }
  }>[]
  faculties: Faculty[]
  academicYears: AcademicYear[]
}

export function BlogStatusPercentageChart({
  contributions,
  faculties,
  academicYears,
}: BlogStatusPercentageChartProps) {
  const [selectFaculty, setSelectFaculty] = React.useState(
    faculties[0]?.id ?? ""
  )

  const [selectAcademicYear, setSelectAcademicYear] = React.useState(
    academicYears[0]?.id ?? ""
  )

  const totalContributions = contributions.filter(
    ({ facultyId, academicYearId }) =>
      facultyId === selectFaculty && academicYearId === selectAcademicYear
  )

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
        label: "Percentage of Blog Status",
        data: [
          Math.round((approveTotal / totalContributions.length) * 100),
          Math.round((rejectTotal / totalContributions.length) * 100),
          Math.round((pendingTotal / totalContributions.length) * 100),
        ],
        borderWidth: 1,
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(173, 167, 159, 0.2)",
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
        <Select value={selectFaculty} onValueChange={setSelectFaculty}>
          <SelectTrigger className={styles["select"]}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {faculties.map(({ id, name }) => (
              <SelectItem value={id}>{name}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={selectAcademicYear}
          onValueChange={setSelectAcademicYear}
        >
          <SelectTrigger className={styles["select"]}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {academicYears.map(({ id, name }) => (
              <SelectItem value={id}>{name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className={styles["chart-wrapper"]}>
        <Pie className={styles["chart"]} data={data} />
      </div>
    </div>
  )
}
