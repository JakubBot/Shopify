import ShippingAddressPageTemplate from '@template/ShippingAddressPageTemplate';
import BasicLayout from '@layout/BasicLayout';

const ShippingAddress = () => {
  return (
    <>
      <BasicLayout title="Shopify - Shipping address">
        <ShippingAddressPageTemplate />
      </BasicLayout>
    </>
  );
};

export default ShippingAddress;
