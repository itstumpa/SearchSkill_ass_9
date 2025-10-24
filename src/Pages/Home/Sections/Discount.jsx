import React from 'react';
import { NavLink } from 'react-router';

const Discount = () => {
      return (
            <div>
                  <div className="p-6 py-8 md:py-20 dark:bg-violet-600 dark:text-gray-50">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to
				<br  className="sm:hidden" /> 30% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus Buy One Get One! Use code:</span>
				<span className="font-bold text-lg">TUMPA</span>
			</div>
 <NavLink
            to="/login"
            className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-white text-black font-semibold dark:border-gray-600"
          >
            Shop Now
          </NavLink>		
          </div>
	</div>
</div>
            </div>
      );
};

export default Discount;