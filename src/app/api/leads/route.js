import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const niche = searchParams.get("niche") || "dentist";
  const city = searchParams.get("city") || "Miami";
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  try {
    // Search for places
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
      niche
    )}+in+${encodeURIComponent(city)}&key=${apiKey}`;
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();

    if (!searchData.results) {
      return NextResponse.json({ leads: [] });
    }

    const leads = [];

    // Get details for each place (to check website field)
    for (const place of searchData.results) {
      const detailUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,formatted_address,formatted_phone_number,website&key=${apiKey}`;
      const detailRes = await fetch(detailUrl);
      const detailData = await detailRes.json();
      const details = detailData.result;

      if (details && !details.website) {
        leads.push({
          name: details.name || "N/A",
          address: details.formatted_address || "N/A",
          phone: details.formatted_phone_number || "N/A",
          website: "❌ No website",
          location: city,
        });
      }
    }

    return NextResponse.json({ leads });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}