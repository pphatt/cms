"use server"

import { db } from "@/server/db"
import { type StatusEnum } from "@prisma/client"
import type { z } from "zod"

import type {
  getBlogsWithUserByGuestSchema,
  getBlogsWithUserByMarketingManagerSchema,
  getBlogsWithUserByStudentSchema,
  getBlogsWithUserSchema,
  getLikeBlogsSchema,
  getRecentBlogsSchema,
} from "@/lib/validations/blog"

export async function getBlogCount(
  query: string,
  facultyId: string,
  academicYearId: string,
  status: string
) {
  try {
    if (status === "all blogs") {
      return await db.blogs.count({
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
          academicYearId,
          facultyId,
        },
      })
    }

    if (status !== "undefined") {
      return await db.blogs.count({
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
          academicYearId,
          facultyId,
          status: status.toUpperCase() as StatusEnum,
        },
      })
    }

    return await db.blogs.count({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
        academicYearId,
        facultyId,
      },
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getBlogsWithUser({
  pageNumber,
  rowsNumber,
  query,
  status,
  facultyId,
  academicYearId,
}: z.infer<typeof getBlogsWithUserSchema>) {
  try {
    if (status === "approve") {
      return await db.blogs.findMany({
        skip: (pageNumber - 1) * rowsNumber,
        take: rowsNumber,
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
          facultyId,
          academicYearId,
          status: "APPROVE",
        },
        include: {
          author: true,
          comments: true,
          marketingCoordinator: true,
          like: true,
          save: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      })
    }

    if (status === "pending") {
      return await db.blogs.findMany({
        skip: (pageNumber - 1) * rowsNumber,
        take: rowsNumber,
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
          facultyId,
          academicYearId,
          status: "PENDING",
        },
        include: {
          author: true,
          comments: true,
          marketingCoordinator: true,
          like: true,
          save: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      })
    }

    if (status === "reject") {
      return await db.blogs.findMany({
        skip: (pageNumber - 1) * rowsNumber,
        take: rowsNumber,
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
          facultyId,
          academicYearId,
          status: "REJECT",
        },
        include: {
          author: true,
          comments: true,
          marketingCoordinator: true,
          like: true,
          save: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      })
    }

    return await db.blogs.findMany({
      skip: (pageNumber - 1) * rowsNumber,
      take: rowsNumber,
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
        facultyId,
        academicYearId,
      },
      include: {
        author: true,
        comments: true,
        marketingCoordinator: true,
        like: true,
        save: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getBlogCountByStudent(
  query: string,
  academicYearId: string
) {
  try {
    return await db.blogs.count({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
        academicYearId,
        publicized: true,
        status: "APPROVE",
      },
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getBlogsWithUserByStudent({
  query,
  pageNumber,
  rowsNumber,
  facultyId,
  academicYearId,
}: z.infer<typeof getBlogsWithUserByStudentSchema>) {
  try {
    return await db.blogs.findMany({
      skip: (pageNumber - 1) * rowsNumber,
      take: rowsNumber,
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
        facultyId,
        academicYearId,
        publicized: true,
        status: "APPROVE",
      },
      include: {
        author: true,
        comments: true,
        marketingCoordinator: true,
        like: true,
        save: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getRecentBlogCount(
  query: string,
  userId: string,
  academicYearId: string,
  status: string
) {
  try {
    if (status === "all blogs") {
      return await db.blogs.count({
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
          authorId: userId,
          academicYearId,
        },
      })
    }

    if (status !== "undefined") {
      return await db.blogs.count({
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
          authorId: userId,
          academicYearId,
          status: status.toUpperCase() as StatusEnum,
        },
      })
    }

    return await db.blogs.count({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
        authorId: userId,
        academicYearId,
      },
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getRecentBlogs({
  query,
  userId,
  pageNumber,
  rowsNumber,
  status,
  academicYearId,
}: z.infer<typeof getRecentBlogsSchema>) {
  try {
    if (status === "approve") {
      return await db.blogs.findMany({
        skip: (pageNumber - 1) * rowsNumber,
        take: rowsNumber,
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
          authorId: userId,
          academicYearId,
          status: "APPROVE",
        },
        include: {
          author: true,
          comments: true,
          marketingCoordinator: true,
          like: true,
          save: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      })
    }

    if (status === "pending") {
      return await db.blogs.findMany({
        skip: (pageNumber - 1) * rowsNumber,
        take: rowsNumber,
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
          authorId: userId,
          academicYearId,
          status: "PENDING",
        },
        include: {
          author: true,
          comments: true,
          marketingCoordinator: true,
          like: true,
          save: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      })
    }

    if (status === "reject") {
      return await db.blogs.findMany({
        skip: (pageNumber - 1) * rowsNumber,
        take: rowsNumber,
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
          authorId: userId,
          academicYearId,
          status: "REJECT",
        },
        include: {
          author: true,
          comments: true,
          marketingCoordinator: true,
          like: true,
          save: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      })
    }

    return await db.blogs.findMany({
      skip: (pageNumber - 1) * rowsNumber,
      take: rowsNumber,
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
        authorId: userId,
        academicYearId,
      },
      include: {
        author: true,
        comments: true,
        marketingCoordinator: true,
        like: true,
        save: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getBlogCountByMarketingManager(
  query: string,
  facultyId: string,
  academicYearId: string,
  status: string
) {
  try {
    if (status === "all blogs") {
      return await db.blogs.count({
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
          academicYearId,
          facultyId,
        },
      })
    }

    if (status !== "undefined") {
      return await db.blogs.count({
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
          academicYearId,
          facultyId,
          status: status.toUpperCase() as StatusEnum,
        },
      })
    }

    return await db.blogs.count({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
        academicYearId,
        facultyId,
      },
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getBlogsWithUserByMarketingManager({
  query,
  pageNumber,
  rowsNumber,
  status,
  academicYearId,
  facultyId,
}: z.infer<typeof getBlogsWithUserByMarketingManagerSchema>) {
  try {
    if (status === "all blogs") {
      return await db.blogs.findMany({
        skip: (pageNumber - 1) * rowsNumber,
        take: rowsNumber,
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
          academicYearId,
          facultyId,
        },
        include: {
          author: true,
          comments: true,
          marketingCoordinator: true,
          like: true,
          save: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      })
    }

    if (status !== "undefined") {
      return await db.blogs.findMany({
        skip: (pageNumber - 1) * rowsNumber,
        take: rowsNumber,
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
          academicYearId,
          facultyId,
          status: status.toUpperCase() as StatusEnum,
        },
        include: {
          author: true,
          comments: true,
          marketingCoordinator: true,
          like: true,
          save: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      })
    }

    return await db.blogs.findMany({
      skip: (pageNumber - 1) * rowsNumber,
      take: rowsNumber,
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
        academicYearId,
        facultyId,
      },
      include: {
        author: true,
        comments: true,
        marketingCoordinator: true,
        like: true,
        save: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getBlogCountByGuest(query: string) {
  try {
    return await db.blogs.count({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
        allowGuest: true,
      },
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getBlogsWithUserByGuest({
  query,
  pageNumber,
  rowsNumber,
}: z.infer<typeof getBlogsWithUserByGuestSchema>) {
  try {
    return await db.blogs.findMany({
      skip: (pageNumber - 1) * rowsNumber,
      take: rowsNumber,
      where: {
        allowGuest: true,
        title: {
          contains: query,
          mode: "insensitive",
        },
      },
      include: {
        author: true,
        comments: true,
        marketingCoordinator: true,
        like: true,
        save: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getLikeBlogsCount(query: string, userId: string) {
  try {
    return await db.blogs.count({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
        like: {
          some: {
            userId: userId,
          },
        },
      },
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getLikeBlogs({
  query,
  userId,
  pageNumber,
  rowsNumber,
}: z.infer<typeof getLikeBlogsSchema>) {
  try {
    return await db.like.findMany({
      skip: (pageNumber - 1) * rowsNumber,
      take: rowsNumber,
      where: {
        userId: userId,
        blog: {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
      },
      include: {
        blog: {
          include: {
            like: true,
            author: true,
            comments: true,
            marketingCoordinator: true,
            save: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getSaveBlogsCount(query: string, userId: string) {
  try {
    return await db.blogs.count({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
        save: {
          some: {
            userId: userId,
          },
        },
      },
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getSaveBlogs({
  query,
  userId,
  pageNumber,
  rowsNumber,
}: z.infer<typeof getLikeBlogsSchema>) {
  try {
    return await db.saveBlogs.findMany({
      skip: (pageNumber - 1) * rowsNumber,
      take: rowsNumber,
      where: {
        userId: userId,
        blog: {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
      },
      include: {
        blog: {
          include: {
            like: true,
            author: true,
            comments: true,
            marketingCoordinator: true,
            save: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })
  } catch (err) {
    console.log(err)
    return null
  }
}
