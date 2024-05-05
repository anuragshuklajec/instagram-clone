import AuthForm from "../components/auth/AuthForm";
function AuthPages(){
return <>
<div className="flex justify-center items-center h-screen">
        <div className="hidden md:block">
          <img src="/auth.png" alt="Instagram" />
        </div>
        <AuthForm/>
      </div>
</>
}

export default AuthPages;