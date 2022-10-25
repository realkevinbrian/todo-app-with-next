import Link from "next/link"

function Footer() {
  return (
    <div>
        
        <div>
            5 items left
        </div>

        <div>
            <Link href={"/"}>All</Link>
            <Link href={"/"}>Active</Link>
            <Link href={"/"}>Completed</Link>
        </div>

        <div>
            Clear Completed
        </div>

    </div>
  )
}

export default Footer