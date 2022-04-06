# movieapp-api
Movie App api application encoded with NodeJS

<h1 style="text-align: center;"><strong><span style="font-family: Calibri, sans-serif;">Method List</span></strong></h1>
<blockquote>
    <p><span style="font-family: Calibri, sans-serif;">For Movies;</span></p>
</blockquote>
<table cellspacing="0" class=" cke_show_border" style="border-collapse:collapse;">
    <tbody>
        <tr>
            <td style="background-color:#5b9bd5; border-bottom:2px solid #5b9bd5; border-left:2px solid #5b9bd5; border-right:none; border-top:2px solid #5b9bd5; vertical-align:top; width:209px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>Route</strong></span></p>
            </td>
            <td style="background-color:#5b9bd5; border-bottom:2px solid #5b9bd5; border-left:none; border-right:none; border-top:2px solid #5b9bd5; vertical-align:top; width:65px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>Method</strong></span></p>
            </td>
            <td style="background-color:#5b9bd5; border-bottom:2px solid #5b9bd5; border-left:none; border-right:none; border-top:2px solid #5b9bd5; vertical-align:top; width:180px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>POST Body</strong></span></p>
            </td>
            <td style="background-color:#5b9bd5; border-bottom:2px solid #5b9bd5; border-left:none; border-right:2px solid #5b9bd5; border-top:2px solid #5b9bd5; vertical-align:top; width:151px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>Description</strong></span></p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:209px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/api/movies</strong></span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:65px;">
                <p><span style="font-family: Calibri, sans-serif;">GET</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:180px;">
                <p><span style="font-family: Calibri, sans-serif;">Empty</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:151px;">
                <p><span style="font-family: Calibri, sans-serif;">List all movies.</span></p>
            </td>
        </tr>
        <tr>
            <td style="border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:209px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/api/movies</strong></span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:65px;">
                <p><span style="font-family: Calibri, sans-serif;">POST</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:180px;">
                <p><span style="font-family: Calibri, sans-serif;">
                    {    "title":"The Shawshank Redemption", "category":"Drama", "country":"US", "year":1994, "director_id":"60cf6158d53825d34c6c2e01", 
                            "imdb_score": 9.3}
                    </span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:151px;">
                <p><span style="font-family: Calibri, sans-serif;">Create a new movie.</span></p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:209px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/api/movies/:movie_id</strong></span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:65px;">
                <p><span style="font-family: Calibri, sans-serif;">GET</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:180px;">
                <p><span style="font-family: Calibri, sans-serif;">Empty</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:151px;">
                <p><span style="font-family: Calibri, sans-serif;">Get a movie.</span></p>
            </td>
        </tr>
        <tr>
            <td style="border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:209px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/api/movies/:movie_id</strong></span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:65px;">
                <p><span style="font-family: Calibri, sans-serif;">PUT</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:180px;">
                <p><span style="font-family: Calibri, sans-serif;">{&apos;name&apos;:&apos;foo&apos;, &apos;surname&apos;:&apos;bar&apos;}</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:151px;">
                <p><span style="font-family: Calibri, sans-serif;">Update a movie with new info.</span></p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:209px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/api/movies/:movie_id</strong></span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:65px;">
                <p><span style="font-family: Calibri, sans-serif;">DELETE</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:180px;">
                <p><span style="font-family: Calibri, sans-serif;">Empty</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:151px;">
                <p><span style="font-family: Calibri, sans-serif;">Delete a movie.</span></p>
            </td>
        </tr>
        <tr>
            <td style="border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:209px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/api/movies/top10</strong></span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:65px;">
                <p><span style="font-family: Calibri, sans-serif;">GET</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:180px;">
                <p><span style="font-family: Calibri, sans-serif;">Empty</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:151px;">
                <p><span style="font-family: Calibri, sans-serif;">Get the top 10 movies.</span></p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:209px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/api/movies/between/</strong></span></p>
                <p><span style="font-family: Calibri, sans-serif;"><strong>:start_year/:end_year</strong></span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:65px;">
                <p><span style="font-family: Calibri, sans-serif;">GET</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:180px;">
                <p><span style="font-family: Calibri, sans-serif;">Empty</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:151px;">
                <p><span style="font-family: Calibri, sans-serif;">Movies between two dates.</span></p>
            </td>
        </tr>
    </tbody>
</table>
<blockquote>
    <p><span style="font-family: Calibri, sans-serif;">For Directors;</span></p>
</blockquote>
<table cellspacing="0" class=" cke_show_border" style="border-collapse:collapse;">
    <tbody>
        <tr>
            <td style="background-color:#5b9bd5; border-bottom:2px solid #5b9bd5; border-left:2px solid #5b9bd5; border-right:none; border-top:2px solid #5b9bd5; vertical-align:top; width:179px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>Route</strong></span></p>
            </td>
            <td style="background-color:#5b9bd5; border-bottom:2px solid #5b9bd5; border-left:none; border-right:none; border-top:2px solid #5b9bd5; vertical-align:top; width:66px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>Method</strong></span></p>
            </td>
            <td style="background-color:#5b9bd5; border-bottom:2px solid #5b9bd5; border-left:none; border-right:none; border-top:2px solid #5b9bd5; vertical-align:top; width:217px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>POST Body</strong></span></p>
            </td>
            <td style="background-color:#5b9bd5; border-bottom:2px solid #5b9bd5; border-left:none; border-right:2px solid #5b9bd5; border-top:2px solid #5b9bd5; vertical-align:top; width:141px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>Description</strong></span></p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:179px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/api/directors</strong></span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:66px;">
                <p><span style="font-family: Calibri, sans-serif;">GET</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:217px;">
                <p><span style="font-family: Calibri, sans-serif;">Empty</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:141px;">
                <p><span style="font-family: Calibri, sans-serif;">List all directors.</span></p>
            </td>
        </tr>
        <tr>
            <td style="border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:179px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/api/directors</strong></span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:66px;">
                <p><span style="font-family: Calibri, sans-serif;">POST</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:217px;">
                <p><span style="font-family: Calibri, sans-serif;">{name: &apos;foo&apos;, surname:&apos;bar&apos;, bio:&apos;lorem ipsum&apos; }</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:141px;">
                <p><span style="font-family: Calibri, sans-serif;">Create a new director.</span></p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:179px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/api/directors/:director_id</strong></span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:66px;">
                <p><span style="font-family: Calibri, sans-serif;">GET</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:217px;">
                <p><span style="font-family: Calibri, sans-serif;">Empty</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:141px;">
                <p><span style="font-family: Calibri, sans-serif;">Get a director.</span></p>
            </td>
        </tr>
        <tr>
            <td style="border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:179px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/api/directors/:director_id</strong></span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:66px;">
                <p><span style="font-family: Calibri, sans-serif;">PUT</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:217px;">
                <p><span style="font-family: Calibri, sans-serif;">{&apos;name&apos;:&apos;foo&apos;, &apos;surname&apos;:&apos;bar&apos;, &apos;bio&apos;: &apos;lorem&apos;}</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:141px;">
                <p><span style="font-family: Calibri, sans-serif;">Update a director with new info.</span></p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:179px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/api/directors/:director_id</strong></span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:66px;">
                <p><span style="font-family: Calibri, sans-serif;">DELETE</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:217px;">
                <p><span style="font-family: Calibri, sans-serif;">Empty</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:141px;">
                <p><span style="font-family: Calibri, sans-serif;">Delete a director.</span></p>
            </td>
        </tr>
        <tr>
            <td style="border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:179px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/api/directors/:director_id</strong></span></p>
                <p><span style="font-family: Calibri, sans-serif;"><strong>/best10movie</strong></span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:66px;">
                <p><span style="font-family: Calibri, sans-serif;">GET</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:217px;">
                <p><span style="font-family: Calibri, sans-serif;">Empty</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:141px;">
                <p><span style="font-family: Calibri, sans-serif;">The director&apos;s top 10 films.</span></p>
            </td>
        </tr>
    </tbody>
</table>
<blockquote>
    <p><span style="font-family: Calibri, sans-serif;">For Login;</span></p>
</blockquote>
<table cellspacing="0" class=" cke_show_border" style="border-collapse:collapse;">
    <tbody>
        <tr>
            <td style="background-color:#5b9bd5; border-bottom:2px solid #5b9bd5; border-left:2px solid #5b9bd5; border-right:none; border-top:2px solid #5b9bd5; vertical-align:top; width:104px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>Route</strong></span></p>
            </td>
            <td style="background-color:#5b9bd5; border-bottom:2px solid #5b9bd5; border-left:none; border-right:none; border-top:2px solid #5b9bd5; vertical-align:top; width:66px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>Method</strong></span></p>
            </td>
            <td style="background-color:#5b9bd5; border-bottom:2px solid #5b9bd5; border-left:none; border-right:none; border-top:2px solid #5b9bd5; vertical-align:top; width:302px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>POST Body</strong></span></p>
            </td>
            <td style="background-color:#5b9bd5; border-bottom:2px solid #5b9bd5; border-left:none; border-right:2px solid #5b9bd5; border-top:2px solid #5b9bd5; vertical-align:top; width:132px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>Description</strong></span></p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:104px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/register</strong></span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:66px;">
                <p><span style="font-family: Calibri, sans-serif;">POST</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:302px;">
                <p><span style="font-family: Calibri, sans-serif;">{ username: &apos;foo&apos;, password:&apos;1234&apos; }</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:132px;">
                <p><span style="font-family: Calibri, sans-serif;">Create a new user.</span></p>
            </td>
        </tr>
        <tr>
            <td style="border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:104px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/authenticate</strong></span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:66px;">
                <p><span style="font-family: Calibri, sans-serif;">POST</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:302px;">
                <p><span style="font-family: Calibri, sans-serif;">{ username: &apos;foo&apos;, password:&apos;1234&apos; }</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:132px;">
                <p><span style="font-family: Calibri, sans-serif;">Generate a token.</span></p>
            </td>
        </tr>
    </tbody>
</table>
