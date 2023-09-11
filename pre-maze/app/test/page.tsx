"use client";
import { PrismaClient, User } from "@prisma/client/edge";
import React, { useState } from "react";
import UserCard from "../components/tag";
const prisma = new PrismaClient();

export const getServerSideProps = async () => {
  const userData: User[] = await prisma.user.findMany();

  return {
    props: { userData },
  };
};

export default function Test({ userData }: any) {
  const [users, setUser] = useState<User[]>(userData);

  return (
    <>
      {users.map((u: any, i: number) => (
        <p>hej</p>
      ))}
    </>
  );
}
