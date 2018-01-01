class MomentObj extends React.Component {
    render() {
        return null;
    }
}
MomentObj.propTypes = {
  dateThing : ReactMomentProptypes.momentObj,
  dateThingWithPredicate : ReactMomentProptypes.momentObj.withPredicate(
    function isUTC(momentObject) {
      return momentObject.year() > 1900;
    }
  ),
};

class MomentObjRequiredBase extends React.Component {
    render() {
        return null;
    }
}
MomentObjRequiredBase.propTypes = { requiredDateThing : ReactMomentProptypes.momentObj.isRequired };

class MomentObjRequiredPredicate extends React.Component {
    render() {
        return null;
    }
}
MomentObjRequiredPredicate.propTypes = {
  requiredDateThingWithPredicate : ReactMomentProptypes.momentObj.withPredicate(
    function isUTC(momentObject) {
      return momentObject.year() > 1900;
    }
  ).isRequired,
};

class MomentStr extends React.Component {
    render() {
        return null;
    }
}
MomentStr.propTypes = {
  stringThing: ReactMomentProptypes.momentString,
  stringThingWithPredicate: ReactMomentProptypes.momentString.withPredicate(
    function isFoo(momentString) {
      return true;
    }
  ),
};

class MomentStrRequiredBase extends React.Component {
    render() {
        return null;
    }
}
MomentStrRequiredBase.propTypes = {
  requiredStringThing: ReactMomentProptypes.momentString.isRequired,
};

class MomentStrRequiredPred extends React.Component {
    render() {
        return null;
    }
}
MomentStrRequiredPred.propTypes = {
  requiredStringThingWithPredicate: ReactMomentProptypes.momentString.withPredicate(
    function isFoo(momentString) {
      return true;
    }
  ),
};

class MomentDurationObj extends React.Component {
    render() {
        return null;
    }
}
MomentDurationObj.propTypes = {
  durationObjThing: ReactMomentProptypes.momentDurationObj
};

class MomentDurationObjRequiredBase extends React.Component {
    render() {
        return null;
    }
}
MomentDurationObjRequiredBase.propTypes = {
  requiredDurationObjThing: ReactMomentProptypes.momentDurationObj.isRequired
};
