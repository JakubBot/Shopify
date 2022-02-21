import OrderPageTemplate from '@template/OrderPageTemplate';
import BasicLayout from '@layout/BasicLayout';
const Order = () => {
  return (
    <BasicLayout title="Shopify - Order">
      <OrderPageTemplate />
    </BasicLayout>
  );
};

export default Order;
