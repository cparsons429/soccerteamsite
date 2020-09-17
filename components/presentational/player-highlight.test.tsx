/**
 * @Author: colinparsons
 * @Date:   2020-09-10T10:15:52-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-16T15:48:27-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import React from "react";

import { mount } from "enzyme";

import { Success } from "./player-highlight";

describe("player highlight success", () => {
  const playerHighlight = {
    number: 42,
    name: {
      first: "Joe",
      last: "Shmoe"
    },
    pictureSrc: new URL("https://www.this-is-a-mock-url.com/some-picture.png")
  };

  const successProps = { playerHighlight };

  const wrapper = mount(<Success {...successProps} />);

  describe("player header", () => {
    it("contains `player name (#player number)`", () => {
      expect(wrapper.find("#player-header").text()).toContain(
        `${playerHighlight.name.first} ${playerHighlight.name.last} (#${playerHighlight.number})`
      );
    });
  });

  describe("player picture", () => {
    it("has source pictureSrc", () => {
      expect(wrapper.find("#player-picture").prop("src")).toBe(
        playerHighlight.pictureSrc.toString()
      );
    });
  });
});
