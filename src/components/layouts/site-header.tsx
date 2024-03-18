"use client"

import React from "react"
import Link from "next/link"
import type { Session } from "next-auth"

import { siteConfig } from "@/config/site"
import { logout } from "@/lib/actions/logout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MainNav } from "@/components/layouts/main-nav"
import styles from "@/styles/components/layouts/site-header.module.scss"

import { Icons } from "../icons"

interface SideHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Session | null
}

export const SiteHeader = ({ user, style }: SideHeaderProps) => {
  return (
    <header className={styles["nav-layout"]} style={style}>
      <div className={styles["inner-nav-layout"]}>
        <MainNav items={siteConfig.mainNav} />
        <div className={styles["nav-option"]}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"outline"} className={styles["avatar-trigger"]}>
                {user ? (
                  <Avatar className={styles["avatar"]}>
                    <AvatarImage
                      src={user.user?.image as string | undefined}
                      alt={""}
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                    />
                    <AvatarFallback>
                      {user.user!.name?.charAt(0) ?? ""}
                    </AvatarFallback>
                  </Avatar>
                ) : (
                  <Icons.user />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align={"end"}
              className={styles["dropdown-menu"]}
            >
              {user ? (
                <>
                  <DropdownMenuLabel className={styles["dropdown-label"]}>
                    <div>
                      <p>{user.user!.name}</p>
                      <p>{user.user!.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator
                    className={styles["dropdown-separate-line"]}
                  />
                  <DropdownMenuItem className={styles["dropdown-item"]}>
                    <Link
                      className={styles["dropdown-item-link"]}
                      href={"/settings/user"}
                    >
                      <span>Account</span>
                      <Icons.circleUserRound />
                    </Link>
                  </DropdownMenuItem>
                </>
              ) : (
                <DropdownMenuItem className={styles["dropdown-item"]}>
                  <Link
                    className={styles["dropdown-item-link"]}
                    href={"/signin"}
                  >
                    <span>Sign In</span>
                    <Icons.login />
                  </Link>
                </DropdownMenuItem>
              )}

              <DropdownMenuItem className={styles["dropdown-item"]}>
                <Link
                  className={styles["dropdown-item-link"]}
                  href={"/settings/all"}
                >
                  <span>Settings</span>
                  <Icons.settings />
                </Link>
              </DropdownMenuItem>

              {user && (
                <>
                  <DropdownMenuSeparator
                    className={styles["dropdown-separate-line"]}
                  />
                  <DropdownMenuItem className={styles["dropdown-item"]}>
                    <span
                      className={styles["sign-out"]}
                      onClick={() => logout()}
                    >
                      <span>Logout</span>
                      <Icons.logout />
                    </span>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
