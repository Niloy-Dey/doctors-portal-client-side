const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className=" my-4 btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ">{children}</button>
        </div>
    );
};

export default PrimaryButton;