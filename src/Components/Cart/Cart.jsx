import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hook/useAuth';
import useAxios from '../../Hook/useAxios';

const Cart = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const { data: carts, isLoading } = useQuery({
    queryKey: ['cartItem'],
    queryFn: async () => {
      const res = await axios.get(`/cart/${user.email}`);
      return res.data;
    },
  });
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
