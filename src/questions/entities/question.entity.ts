import { Questions } from "@prisma/client";

export class Question implements Questions {
    id: number;
    title: string;
    body: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    answersCount: number;
}
