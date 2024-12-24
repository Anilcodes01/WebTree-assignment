import {
  Mail,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  UserIcon,
} from "lucide-react";

interface UserDetailsProps {
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  cell: string;
  email: string;
  location: {
    street: string;
    city: string;
    state: string;
    country: string;
    postcode: number;
  };
  dob: string;
  age: number;
  picture: string;
}

export default function UserDetails({
  firstName,
  lastName,
  gender,
  phone,
  cell,
  email,
  location,
  dob,
  age,
  picture,
}: UserDetailsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-sm rounded-xl shadow-xl">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="relative">
                <img
                  src={picture}
                  width={200}
                  height={200}
                  alt={`${firstName} ${lastName}`}
                  className="rounded-2xl shadow-lg object-cover ring-4 ring-white"
                />
                <span className="absolute -bottom-3 right-0 px-3 py-1 bg-indigo-500 text-white text-sm rounded-full capitalize">
                  {gender}
                </span>
              </div>
            </div>

            <div className="flex-1  space-y-6">
              <div className="ml-2">
                <h1 className="text-3xl  font-bold text-gray-900 mb-2">
                  {firstName} {lastName}
                </h1>
                <div className="flex  items-center gap-2 text-gray-500">
                  <UserIcon size={16} />
                  <span>Age: {age}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="group flex items-center gap-3 text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {email}
                  </a>
                </div>

                <div className="group flex items-center gap-3 text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <p>Phone: {phone}</p>
                    <p className="text-sm text-gray-500">Mobile: {cell}</p>
                  </div>
                </div>

                <div className="group flex items-center gap-3 text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <CalendarIcon className="w-4 h-4" />
                  </div>
                  <span>Born: {dob}</span>
                </div>

                <div className="group flex items-start gap-3 text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors mt-1">
                    <MapPinIcon className="w-4 h-4" />
                  </div>
                  <address className="not-italic leading-relaxed">
                    {location.street}
                    <br />
                    {location.city}, {location.state}
                    <br />
                    {location.country}, {location.postcode}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
