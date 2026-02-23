"use server";

import { dbConnect } from "@/lib/dbConnect";  // ← fix here

// Get all services
export const getAllServices = async () => {
  try {
    const collection = dbConnect("services");
    const services = await collection.find({}).toArray();

    return services.map((service) => ({
      ...service,
      _id: service._id.toString(),
    }));
  } catch (error) {
    throw new Error("Failed to fetch services: " + error.message);
  }
};

// Get single service by slug
export const getServiceBySlug = async (slug) => {
  try {
    const collection = dbConnect("services");
    const service = await collection.findOne({ slug });

    if (!service) return null;

    return {
      ...service,
      _id: service._id.toString(),
    };
  } catch (error) {
    throw new Error("Failed to fetch service: " + error.message);
  }
};