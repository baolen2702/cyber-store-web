"use client";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const CheckoutAddress = () => {
  const form = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Address</h2>

      <FormField
        control={form.control}
        name="customer.firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>first Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="customer.lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>last Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="customer.email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>email</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="customer.phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>phone</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="customer.address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>address</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="customer.city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>city</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="customer.country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>country</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="customer.zip"
        render={({ field }) => (
          <FormItem>
            <FormLabel>zip</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CheckoutAddress;
