<!-- Generated by responder.co.il -->
<script type="text/javascript">
    <!--
    function responder_validation(form) {
        var inputs = form.getElementsByTagName('input');
        var selects = form.getElementsByTagName('select');
        var filter_email = /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z0-9])\.)+[a-z]{2,})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i;
        var filter_phone = /^(?:|(?:050|051|052|053|054|055|057|058|02|03|04|08|09)\d{7,7})$/;

        for (a=0; a<inputs.length; a++) {
            switch (inputs[a].name) {
                case 'fields[subscribers_email]':
                    if (!filter_email.test(inputs[a].value)) {
                        alert('כתובת הדוא"ל אינה חוקית');
                        inputs[a].focus();
                        return false;
                    }

                    break;
                case 'fields[subscribers_phone]':
                    var phone = inputs[a].value.replace(/-|\s/g, '');
                    if (!filter_phone.test(phone.length==0 || phone.charAt(0)=='0' ? phone : '0' + phone)) {
                        alert('מספר הטלפון הנייד אינו חוקי');
                        inputs[a].focus();
                        return false;
                    }

                    break;
            }
        }

        for (a=0; a<selects.length; a++) {
            switch (selects[a].name) {
            }
        }

        if (document.charset)
            form.encoding.value = document.charset;
        else if (document.defaultCharset)
            form.encoding.value = document.defaultCharset;
        else if (document.characterSet)
            form.encoding.value = document.characterSet;

        if (navigator.userAgent.indexOf(';FBAV/') > -1) {
            form.target = '_self';
        }

        return true;
    }
    //-->

    function get_day(){
    var d = new Date();
    var n = d.getDay();

    return "1335353"
}

</script>

<form method="post" action="https://subscribe.responder.co.il" onsubmit="return responder_validation(this);">
    <table border="0" dir="rtl">
        <tbody>
            <tr>
                <td><b>דואר אלקטרוני</b> <span style="color:red;">*</span></td>
                <td><input type="text" name="fields[subscribers_email]" size="14" dir="ltr" /></td>
            </tr>
            <tr>
                <td><b>שם</b></td>
                <td><input type="text" name="fields[subscribers_name]" size="14" dir="rtl" /></td>
            </tr>
            <tr>
                <td><b>טלפון נייד</b></td>
                <td><input type="text" name="fields[subscribers_phone]" size="14" dir="ltr" /></td>
            </tr>
            <tr>
                <td><b>zip</b></td>
                <td><input type="text" name="fields[zip]" size="14" dir="ltr" /></td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="hidden" name="form_id" value=get_day() />
                <input type="hidden" name="encoding" value="" />
                <input type="submit" value="" />
            </td>
        </tr>
    </tbody>
</table>
</form>