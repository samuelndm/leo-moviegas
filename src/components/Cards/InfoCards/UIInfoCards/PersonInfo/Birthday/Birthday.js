import React from "react";
import PropTypes from "prop-types";
import * as UTIL from "utils/cardsUtil";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Birthday = ({ birthday = null }) => {
  return birthday !== null ? (
    <S.Container>
      <S.Title>Birthday</S.Title>
      <S.Content>{UTIL.formatDateToSlash(birthday) || "*"}</S.Content>
    </S.Container>
  ) : (
    <UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

Birthday.propTypes = {
  birthday: PropTypes.string,
};

export default Birthday;