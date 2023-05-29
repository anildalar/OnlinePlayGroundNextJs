-- CreateTable
CREATE TABLE "Langauge" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "language_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titles" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
