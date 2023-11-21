import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

export default function ManageItem() {
    const axiosSecure = useAxios();
    const { menus , refetch} = useMenu();
    const handleDeleteItem = (id) => {
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
                axiosSecure.delete(`/menus/${id}`)
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
    const handleUpdateItem = (item) => {
        console.log(item)
    }
    return (
        <div>
            <div className="px-20 py-8 bg-[#F6F6F6] min-h-screen">
                <SectionTitle subHeading="Hurry Up" heading="MANEGE ALL ITEMS"></SectionTitle>
                <div className="bg-white min-h-[80vh] px-4 py-6">
                    <div className="overflow-x-auto my-8">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#D1A054] text-white font-inter">
                                    <th>
                                        No.
                                    </th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    menus?.map((item, idx) => <tr key={item._id}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            {item?.name}
                                        </td>
                                        <td>${item?.price}</td>
                                        <th>
                                            <button
                                                onClick={() => handleUpdateItem(item)}
                                                className="btn bg-[#D1A054] text-white btn-sm"><FaEdit></FaEdit> </button>
                                        </th>
                                        <th>
                                            <button
                                                onClick={() => handleDeleteItem(item?._id)}
                                                className="btn bg-[#B91C1C] text-white btn-sm"><FaTrash></FaTrash></button>
                                        </th>
                                    </tr>)
                                }

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
