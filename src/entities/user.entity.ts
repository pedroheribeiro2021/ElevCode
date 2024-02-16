import { Exclude } from "class-transformer"
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm"
import { hashSync } from "bcrypt"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 100, unique: true })
  email: string

  @Column({ length: 100 })
  @Exclude()
  password: string

//   @OneToMany(() => Movies, (movie) => movie.user.id)
//   movies: Movies[]

  hashPassword() {
    this.password = hashSync(this.password, 10)
  }
}
