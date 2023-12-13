import { useQuery } from '@tanstack/react-query';
import swal from 'sweetalert';
import useAuth from '../../Hook/useAuth';
import useAxios from '../../Hook/useAxios';
import deleteIcon from '../../assets/delete.png';

const Cart = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const {
    data: carts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['cartItem'],
    queryFn: async () => {
      const res = await axios.get(`/cart/${user.email}`);
      return res.data;
    },
  });
  const handleDeleteCart = (id) => {
    swal({
      title: 'Are you sure for delete ?',
      text: '',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            swal('Cart item has been deleted!', {
              icon: 'success',
            });
          }
        });
      } else {
        swal('Your cart safe now !');
      }
    });
  };
  return (
    <seciton>
      <div>
        <h1 className='text-5xl font-black text-center my-10'>Cart</h1>
        <div className='w-full overflow-auto'>
          <table className='w-full sm:w-[568px] mx-auto border mb-10 overflow-auto'>
            <thead>
              <tr>
                <td className='no-wrap border p-3 font-bold'>Name</td>
                <td className='no-wrap border p-3 font-bold'>Price</td>
                <td className='no-wrap border p-3 font-bold'>Date</td>
                <td className='no-wrap border p-3 font-bold'>Status</td>
                <td className='no-wrap border p-3 font-bold'>Delete</td>
              </tr>
            </thead>
            <tbody>
              {!isLoading &&
                carts.map((cart, index) => (
                  <tr key={index}>
                    <td className='no-wrap border p-3 tex'>
                      {cart.bookedSevices.name}
                    </td>
                    <td className='no-wrap border p-3 tex'>
                      {cart.bookedSevices.price}
                    </td>
                    <td className='no-wrap border p-3 tex'>{cart.date}</td>
                    <td className='no-wrap border p-3 tex'>{cart.status}</td>
                    <td className='no-wrap border p-3 tex'>
                      <img
                        src={deleteIcon}
                        alt='delete'
                        className='w-5 cursor-pointer'
                        onClick={() => handleDeleteCart(cart._id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </seciton>
  );
};

export default Cart;
