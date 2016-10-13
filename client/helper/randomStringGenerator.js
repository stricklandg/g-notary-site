/**
 * Created by gregorydrake on 8/3/16.
 */
export default function stringGen(length)
{
    var text = "";

    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}
