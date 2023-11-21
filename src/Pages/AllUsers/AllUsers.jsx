import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxios from "../../Hooks/useAxios";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

export default function AllUsers() {
    const axiosSecure = useAxios();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users' , { headers : {
                authorization : `bearer ${localStorage.getItem("access-token")}` 
            }});
            return res.data;
        }
    })
    const handleDeleteItem = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your User has been deleted.',
                                'success'
                            )
                        }
                        refetch()
                    })

            }
        })
    }
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user?._id}`)
            .then(res => {
                console.log(res);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire(
                        'Done!',
                        `${user?.name} is Admin now`,
                        'success'
                    )
                }
            })
    }
    return (
        <div className="px-20 py-6">
            <SectionTitle subHeading="How many??" heading="MANAGE ALL USERS"></SectionTitle>
            <h2 className="text-3xl mb-3 font-bold font-cinzel">Total Users - {users?.length}</h2>
            <div className="font-inter">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => <tr key={user?._id}>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        { user?.role === "admin" ? "admin" :<button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn bg-[#D1A054] text-white btn-sm"><FaUsers></FaUsers> </button>}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(user?._id)}
                                            className="btn bg-[#B91C1C] text-white btn-sm"><FaTrash></FaTrash></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
