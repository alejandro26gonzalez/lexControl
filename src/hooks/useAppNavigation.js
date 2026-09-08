import { useNavigate } from "react-router-dom";

const useAppNavigation = () => {
    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
    };

    const goBack = () => {
        navigate(-1);
    };

    return {
        goBack,
        goTo
    };
};

export default useAppNavigation;