"use server";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export const createCompanion = async (formaData: CreateCompanion) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formaData, author })
    .select();
  if (error || !data) {
    throw new Error(error?.message || "Failed to create a companion");
  }
  return data[0];
};
