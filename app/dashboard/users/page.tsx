import React from 'react'
import Link from 'next/link'
import styles from "@/app/ui/dashboard/users/user.module.css"
import Image from 'next/image'
import { Search } from '@mui/icons-material'
export default function Users() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
    {/* <Search placeholder="Serach for a user...."/> */}
    <Link  href="/dashboard/users/add"/>
    <button className={styles.addButton}>Add new</button>
    </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
            <Image src="/noavatar.jpg" width={50} height={50} className={styles.user}>
              Asilbek Tojiqulov
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
