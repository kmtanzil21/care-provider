"use server";

import { dbConnect } from "@/lib/dbConnect";  // ← fix here
import { ObjectId } from "mongodb";


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
// export const getServiceBySlug = async (slug) => {
//   try {
//     const collection = dbConnect("services");
//     const service = await collection.findOne({ slug });

//     if (!service) return null;

//     return {
//       ...service,
//       _id: service._id.toString(),
//     };
//   } catch (error) {
//     throw new Error("Failed to fetch service: " + error.message);
//   }
// };

export const getServiceById = async (id) => {

  try {

    const collection = await dbConnect("services");

    const service = await collection.findOne({
      _id: new ObjectId(id),
    });

    if (!service) {
      return null;
    }

    return {
      ...service,
      _id: service._id.toString(),
    };

  } catch (error) {

    console.log("Error fetching service:", error);

    return null;
  }

};