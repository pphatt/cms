import { db } from "@/server/db"
import { z } from "zod"

import { fileEditSchema } from "@/lib/validations/contributions"
import type { FileInputs } from "@/components/submit-contributions"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as FileInputs

    const { contributionsId, location } = fileEditSchema.parse(body)

    await db.contributions.update({
      where: { id: contributionsId },
      data: {
        location: JSON.stringify(location),
      },
    })

    return new Response(JSON.stringify("OK"), { status: 200 })
  } catch (error) {
    console.log(error)
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.message), { status: 400 })
    }

    return new Response(
      JSON.stringify(
        "Could not create workspace at this time. Please try later"
      ),
      { status: 500 }
    )
  }
}