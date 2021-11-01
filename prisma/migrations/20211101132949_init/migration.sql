-- CreateTable
CREATE TABLE "Cat" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "breed" TEXT NOT NULL,
    "petOwnerId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PetOwner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cat_id_key" ON "Cat"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PetOwner_id_key" ON "PetOwner"("id");
