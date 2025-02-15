"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const formSchema = z.object({
  activity: z.string().min(1, "Activity is required"),
  price: z.preprocess(
    (val) => Number(val),
    z.number().min(0, "Price must be positive")
  ),
  type: z.enum([
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ]),
  bookingRequired: z.boolean(),
  accessibility: z.number(),
});

export default function ActivityForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      activity: "",
      price: 0,
      type: "education",
      bookingRequired: false,
      accessibility: 0.5,
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // You can now send this data to your backend or process it as needed
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Activity Field */}
        <FormField
          control={form.control}
          name="activity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Activity</FormLabel>
              <FormControl>
                <Input placeholder="Enter activity" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Price Field */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="Enter price"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Type Field */}
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="recreational">Recreational</SelectItem>
                    <SelectItem value="social">Social</SelectItem>
                    <SelectItem value="diy">DIY</SelectItem>
                    <SelectItem value="charity">Charity</SelectItem>
                    <SelectItem value="cooking">Cooking</SelectItem>
                    <SelectItem value="relaxation">Relaxation</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="busywork">Busywork</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Booking Required Field */}
        <FormField
          control={form.control}
          name="bookingRequired"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Booking required</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Accessibility Field */}
        <FormField
          control={form.control}
          name="accessibility"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Accessibility</FormLabel>
              <FormControl>
                <Slider
                  defaultValue={[field.value]}
                  max={1}
                  step={0.01}
                  onValueChange={(value) => field.onChange(value[0])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
