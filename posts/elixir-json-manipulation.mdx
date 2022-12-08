---
title: "elixir-json-manipulation"
description: ""
date: 2022-10-02T19:29:43+05:30
tags: ["elixir"]
draft: true
---

```elixir
defmodule ModifyFile do
  def modify_data do
    links_list =
      File.read!('./data.json')
      |> Jason.decode!()
      |> Enum.map(fn %{"link" => link} -> link end)

    originalData =
      File.read!('./original_data.json')
      |> Jason.decode!()

    modified_data =
      Enum.map(originalData, fn {key, value} ->
        containedData = Enum.filter(links_list, fn x -> String.contains?(x, key) end)
        img = Enum.find(containedData, nil, fn x -> String.contains?(x, ".png") end)
        tracks = Enum.filter(containedData, fn x -> String.contains?(x, ".wav") end)
        loop = 0

        tracks_data =
          Enum.map(tracks, fn track_link ->
            title = "Loop #{loop}"
            %{"title" => title, "genre" => "", "audio" => track_link, "duration" => 0}
          end)

        %{
          key =>
            Map.put(value, "img", img || "")
            |> Map.update("sampleTracks", [], fn _x -> tracks_data end)
        }
      end)

    File.write!('./modified.json', Jason.encode!(modified_data))
  end
end
```
