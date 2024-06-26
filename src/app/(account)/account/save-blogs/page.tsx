import * as React from "react"
import Link from "next/link"
import type { SearchParams } from "@/types"
import { format } from "date-fns"
import type { User } from "next-auth"

import { currentUser } from "@/lib/auth/auth"
import {
  getSaveContributionCount,
  getSaveContributions,
} from "@/lib/fetchers/contribution"
import type { SaveIncludeBlog } from "@/lib/prisma"
import { parserPage, parserRows } from "@/lib/utils"
import { likeBlogsParamsSchema } from "@/lib/validations/params"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { LikeBtn } from "@/components/like-btn"
import { PaginationLikeBlogs } from "@/components/pagination/pagination-like-blogs"
import { SaveBlog } from "@/components/save-blog"
import styles from "@/styles/(account)/save-blogs/page.module.scss"
import { SearchInput } from "@/app/(lobby)/contribution/_components/search-input"
import { SelectRowInput } from "@/app/(lobby)/contribution/_components/select-row"

interface SaveBlogsPageProps {
  searchParams: SearchParams
}

export default async function SaveBlogsPage({
  searchParams,
}: SaveBlogsPageProps) {
  const user = (await currentUser()) as User

  const { page, row, q } = likeBlogsParamsSchema.parse(searchParams)

  const pageNumber = parserPage(page)
  const rowsNumber = parserRows(row, 10)

  const contributions = (await getSaveContributions({
    query: q,
    userId: user.id!,
    pageNumber,
    rowsNumber,
  })) as SaveIncludeBlog[]

  const totalContributions = (await getSaveContributionCount(
    q,
    user.id!
  )) as number

  return (
    <div>
      <SearchInput />

      <div className={styles["action-row-wrapper"]}>
        <div className={styles["action-row-select"]}>
          <SelectRowInput />
        </div>
      </div>

      {!contributions.length && (
        <div className={styles["no-results"]}>No results</div>
      )}

      <div>
        {contributions.map(({ contribution }, index) => {
          const comments = contribution.comments
          const like = contribution.like
          const save = contribution.save
          const marketingCoordinator = contribution.marketingCoordinator

          const { id, title, author, status, createdAt } = contribution

          const commentsCount = comments.filter(
            (comment) => !comment.replyToId
          ).length

          const initialLike = like.some(
            ({ userId, contributionId }) =>
              userId === user.id && contributionId === id
          )

          const initialSave = save.some(
            ({ userId, contributionId }) =>
              userId === user.id && contributionId === id
          )

          return (
            <article className={styles["article-wrapper"]} key={index}>
              <div className={styles["article-container"]}>
                <div className={styles["article-header-wrapper"]}>
                  <div className={styles["article-header-container"]}>
                    <div className={styles["author-avatar-wrapper"]}>
                      <Avatar className={styles["avatar"]}>
                        <AvatarImage
                          src={author.image ?? ""}
                          alt={""}
                          style={{
                            objectFit: "cover",
                            objectPosition: "top",
                          }}
                        />
                        <AvatarFallback>
                          <Icons.user />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <div className={styles["author-name"]}>{author.name}</div>
                      <div>Created at: {format(createdAt, "PPP")}</div>
                    </div>
                  </div>
                  <div className={styles["status-wrapper"]}>
                    <div
                      className={styles["upload-status"]}
                      data-submit={status.toLowerCase()}
                    >
                      {status.toLowerCase()}
                    </div>
                  </div>
                </div>
                <div className={styles["article-content-wrapper"]}>
                  <h3 className={styles["article-title"]}>
                    <Link
                      href={`/contribution/blog/${id}`}
                      className={styles["article-link"]}
                    >
                      {title}
                    </Link>
                  </h3>
                  <p className={styles["article-description"]}>
                    {marketingCoordinator?.name
                      ? `Graded by: ${marketingCoordinator?.name}`
                      : "Not graded yet"}
                  </p>
                  <div className={styles["article-comments-wrapper"]}>
                    <LikeBtn
                      blogId={id}
                      likeCount={like.length}
                      initialLike={initialLike}
                      className={styles["like-btn"]}
                    >
                      <span>
                        {like.length} {like.length > 1 ? "likes" : "like"}
                      </span>
                    </LikeBtn>

                    <SaveBlog
                      blogId={id}
                      initialSave={initialSave}
                      className={styles["save-btn"]}
                    >
                      <span>Save blog</span>
                    </SaveBlog>

                    <Button variant={"ghost"} className={styles["comment-btn"]}>
                      <Icons.messageCircle />
                      <span>
                        {commentsCount}{" "}
                        {commentsCount > 1 ? "comments" : "comment"}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {!!contributions.length && (
        <PaginationLikeBlogs
          query={q}
          page={pageNumber}
          rows={rowsNumber}
          totalBlogs={totalContributions}
        />
      )}
    </div>
  )
}
