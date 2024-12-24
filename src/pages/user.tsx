import axios from "axios";
import { useEffect, useState } from "react";
import UserDetails from "../components/UserDetails";

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

export default function UserPage() {
  const [userDetails, setUserDetails] = useState<UserDetailsProps | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const userData = response.data.results[0];
        setUserDetails({
          firstName: userData.name.first,
          lastName: userData.name.last,
          gender: userData.gender,
          phone: userData.phone,
          cell: userData.cell,
          email: userData.email,
          location: {
            street: `${userData.location.street.number} ${userData.location.street.name}`,
            city: userData.location.city,
            state: userData.location.state,
            country: userData.location.country,
            postcode: userData.location.postcode,
          },
          dob: new Date(userData.dob.date).toLocaleDateString(),
          age: userData.dob.age,
          picture: userData.picture.large,
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return <UserDetails {...userDetails} />;
}
