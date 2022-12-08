---
title: "Elixir file manipulation"
description: "Manipulating arbitrary number of files present in a directory using Elixir"
date: 2022-10-02T19:29:43+05:30
tags: ["elixir"]
draft: false
---

I used [`Mix.install`](https://github.com/wojtekmach/mix_install_examples) to create an elixir script that reads all the files in a certain directory, manipulates those file names, and then creates a map using those file names.

Then I output that map to JSON data using `Jason` library.

```elixir
Mix.install([{:jason, "~> 1.3"}])

Path.wildcard(
  Path.cwd!() <> "/loops/*"
)
|> Enum.reduce(%{}, fn "/home/aayushmau5/Downloads/experiments/loops/" <> remaining, acc ->
  loops_data = Map.get(acc, remaining, [])

  Map.put(acc, remaining, [
    %{
      "title" => String.split(remaining, " - ") |> Enum.at(0),
      "other" => String.split(remaining, " - ") |> Enum.at(-1) |> String.slice(0..-5),
    }
    | loops_data
  ])
end)
|> Jason.encode!()
|> IO.puts()
```

I like `Path.wildcard\1`, and pattern matching to get `remaining` in `Enum.reduce`. Pretty neat!
