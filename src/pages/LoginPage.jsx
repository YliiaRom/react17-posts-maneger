import { LoginForm } from "@/features/auth";

function LoginPage() {
  return (
    <div className="loginPageWrap">
      <LoginForm />
      <div className="descriptions">
        <p>
          | admin@example.com | admin123 | admin | <br /> Доступ до сторінок:
          <br />
          UserPage: +{" "}
        </p>
        <p>
          | manager1@example.com | admin123 | manager |<br />
          Доступ до сторінок:
          <br />
          UserPage -
        </p>
        <p>
          {" "}
          manager2@example.com | admin123 | manager |<br /> Доступ до сторінок:
          <br />
          UserPage: -
        </p>
        <p>
          | client1@example.com | admin123 | client |<br />
          Доступ до сторінок:
          <br />
          UserPage: -
        </p>
        <p>
          | client2@example.com | admin123 | client |<br /> Доступ до сторінок:
          <br />
          UserPage: -
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
