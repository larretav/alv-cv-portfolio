import { fontSans } from "@/config/fonts"

export const BottomLineSpace = ({ space }: { space: number }) => {

  return (
    <span className={fontSans.className}>{"_".repeat(space)}</span>
  )
}