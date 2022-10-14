import { useCallback } from "react";
import PersonStore from "../stores/PersonStore";
import Person from "../components/Person";

const PersonContainer = ({ personStore }) => {
  const age10 = PersonStore.age10;

  const plus = useCallback(() => {
    psersonStore.plus();
  },[personStore]);

  return <Person age10={age10} plus={plus}/>;
};

export default inject('personStore')(observer(PersonContainer));