---
title: "Elixir: Gemini Vision with Req"
description: "Using req to get information about an image"
date: 2025-03-31T18:49:41.712Z
tags: ["elixir", "gemini"]
draft: false
showToc: false
---

Recently, I wanted to classify some plants with the help of LLMs. And I knew that Google's AI studio gives free access to some Gemini models. So I thought of using Gemini's Vision model to classify the plants. I was able to get it working with the help of [Req](https://hexdocs.pm/req/readme.html) library.

Here's the code for it:

First, getting the image. The image should be base64 encoded.

```elixir
encoded_image =
  image_path
  |> File.read!()
  |> Base.encode64()
```

And now, for the real meat. Making a request to Gemini Vision API along with prompt and the image.

```elixir
Req.post(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
  params: [key: get_api_key()],
  json: %{
    contents: [
      %{
        parts: [
          %{text: prompt()},
          %{
            inline_data: %{
              data: encoded_image,
              mime_type: "image/jpeg"
            }
          }
        ]
      }
    ]
  }
)

@doc """
Prompt to classify plants.
"""
def prompt(), do: "..."
```

That's pretty much it. Here's the whole code that I used to classify the plants.

```elixir
defmodule Plants.AI do
  require Logger

  @llm_url "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash"

  def run(base64_image) do
    response = make_request(base64_image)

    case response do
      {:ok, %Req.Response{status: 200, body: body}} ->
        %{"candidates" => [%{"content" => %{"parts" => [%{"text" => text}]}} | _]} = body
        {:ok, clean_and_parse(text)}

      {:ok, %Req.Response{body: body}} ->
        %{"error" => %{"message" => message}} = body
        Logger.error(message)
        {:error, message}

      {:error, error} ->
        Logger.error(Exception.message(error))
        {:error, error}
    end
  end

  defp make_request(base64_image) do
    Req.post(
      "#{@llm_url}:generateContent",
      params: [key: get_api_key()],
      json: %{
        contents: [
          %{
            parts: [
              %{text: prompt()},
              %{
                inline_data: %{
                  data: base64_image,
                  mime_type: "image/jpeg"
                }
              }
            ]
          }
        ]
      }
    )
  end

  defp prompt() do
    """
    A description of the given plant.
    As a genius expert, your task is to understand the content and provide the parsed objects in json that match the following json_schema:\n
    {"name": string, "info": string, "care": string, "watering_frequency": one of ["weekly", "biweekly", "daily", "<num> days", "<num> weeks", "upper soil dry"]}

    ## Fields:
    - name: Common name of the plant
    - info: Some common information about the plant such as it's features(ex. "air purifier")
    - care: Some care tips of the plant(ex. "indirect sunlight")
    - watering_frequency: At what frequency the plant should be watered(ex. "3 days" meaning every 3 days)

    Make sure to return an instance of the JSON, not the schema itself. Only return one JSON result even if image contains multiple plants.
    """
  end

  defp get_api_key() do
    System.get_env("GEMINI_API_KEY")
  end

  # The response usually gives the JSON between ``json\n and \n```, so we clean that up and parse it.
  defp clean_and_parse(response) do
    Regex.replace(~r/^```json\n|\n```$/, response, "")
    |> JSON.decode!()
  end
end
```

> Note: I'm using structured output feature using the prompt. So, the response is in JSON format.

The Runner module to run the AI module.

```elixir
defmodule Plants do
  @moduledoc """
  Module to handle plant classification using Gemini Vision.
  """

  def classify_plant(image_path) do
    image_path
    |> File.read!()
    |> Base.encode64()
    |> Plants.AI.run()
  end
end
```

```elixir
Plants.classify_plant("path/to/image.jpg")

Output:
# {:ok,
#  %{
#    "name" => "Aloe Vera",
#    "info" => "Air purifier",
#    "care" => "Indirect sunlight",
#    "watering_frequency" => "3 days"
#  }}
```
