-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isDone" BOOLEAN DEFAULT false,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
