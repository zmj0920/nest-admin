import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'sys_user' })
export default class SysUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'department_id' })
  departmentId: number;

  @Column()
  name1: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ length: 32 })
  psalt: string;

  @Column({ name: 'nick_name', nullable: true })
  nickName: string;

  @Column({ name: 'head_img', nullable: true })
  headImg: string;

  @Column({ nullable: true, default: '' })
  email: string;

  @Column({ nullable: true, default: '' })
  phone: string;

  @Column({ nullable: true, default: '' })
  remark: string;

  @Column({ type: 'tinyint', nullable: true, default: 1 })
  status: number;
}
