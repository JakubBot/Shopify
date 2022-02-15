import RegisterPageTemplate from '@template/RegisterPage';
import BasicLayout from '@layout/BasicLayout';
const RegisterPage = () => {
  return (
    <>
      <BasicLayout title="Shopify - Register" positionCartIcon="right">
        <RegisterPageTemplate />
      </BasicLayout>
    </>
  );
};

export default RegisterPage;
