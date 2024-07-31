/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, afterEach } from "vitest";
import PlaylistDetails from "./PlaylistDetails";
import { cleanup, render, screen } from "@testing-library/react";
import { mockPlaylists } from "../../core/model/mockPlaylists";

describe("PlaylistDetails", () => {
  afterEach(() => {
    cleanup();
  });

  it.skip("should render ", () => {
    expect(true).toBe(true);
  });

  it("should render  No playlist selected ", () => {
    render(<PlaylistDetails onEdit={() => {}} />);
    screen.getByText("No playlist selected");
  });

  it("should render playlist data", () => {
    render(<PlaylistDetails playlist={mockPlaylists[0]} onEdit={() => {}} />);

    expect(screen.queryByText("No playlist selected")).toBeNull();

    screen.debug(document.body);
  });
});
