import React, { useState } from "react";
import { validateEmail, validatePhone } from "../utils/validation";

const UserForm = ({ onSubmit, existingEmails, initialData }) => {
  const [user, setUser] = useState(
    initialData || {
      id: crypto.randomUUID(),
      FirstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
      location: "",
      department: "",
    }
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const errs = {};
    if (!user.FirstName) errs.FirstName = "First name required";
    if (!user.lastName) errs.lastName = "Last name required";
    if (!validatePhone(user.phone)) errs.phone = "Invalid phone";
    if (!validateEmail(user.email)) errs.email = "Invalid email";
    if (!user.role) errs.role = "Role required";
    if (!user.location) errs.location = "Location required";
    if (!user.department) errs.department = "Department required";
    if (!initialData && existingEmails.includes(user.email))
      errs.email = "Email already exists";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      onSubmit(user);
    }
  };

  return (
    <form
      className="max-w-4xl mx-auto border border-gray-300 p-6 rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-end mb-4">
        <p className="text-gray-400 italic text-sm">All fields are mandatory</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="block text-sm font-semibold mb-1">
            FIRST NAME <span class="text-red-600">*</span>
          </p>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="FirstName"
            value={user.FirstName}
            onChange={handleChange}
            placeholder="FirstName"
          />
          {errors.FirstName && <span>{errors.FirstName}</span>}
        </div>
        <div>
          <p className="block text-sm font-semibold mb-1">
            LAST NAME<span class="text-red-600">*</span>
          </p>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
          <p className="block text-sm font-semibold mb-1">
            PHONE<span class="text-red-600">*</span>
          </p>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          {errors.phone && <span>{errors.phone}</span>}
        </div>
        <div>
          <p className="block text-sm font-semibold mb-1">
            EMAIL ID<span class="text-red-600">*</span>
          </p>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <p className="block text-sm font-semibold mb-1">
            ROLE<span class="text-red-600">*</span>
          </p>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="role"
            value={user.role}
            onChange={handleChange}
            placeholder="role"
          />
          {errors.role && <span>{errors.role}</span>}
        </div>
        <div>
          <p className="block text-sm font-semibold mb-1">
            LOCATION<span class="text-red-600">*</span>
          </p>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="location"
            value={user.location}
            onChange={handleChange}
            placeholder="location"
          />
          {errors.location && <span>{errors.location}</span>}
        </div>
        <div>
          <p className="block text-sm font-semibold mb-1">
            DEPARTMENT<span class="text-red-600">*</span>
          </p>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="department"
            value={user.department}
            onChange={handleChange}
            placeholder="department"
          />
          {errors.department && <span>{errors.department}</span>}
        </div>
      </div>

      <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white mt-4 items-center justify-center" type="submit">{initialData ? "Update" : "Add"} User</button>
    </form>
  );
};

export default UserForm;
