define("mcelog", function() {
    var baseNum = 0;

    function dataStatics(data) {
        if (!data) {
            return
        }

        data = data.data;
        var list = data.list;

        // var page  = data.page,

        baseNum = baseNum + list.length;

        var traceLogItemsInfo = [],
            acms = [],
            goodsIndex = [],
            eventID = '70500';


        list.forEach(function(item, i) {

            if (item.item_id) {
                traceLogItemsInfo.push(item.item_id)
            }

            if (item.acm) {
                acms.push(item.acm)
            }

            //  types.push( item.itemType )

            goodsIndex.push(baseNum - list.length + i)

            // if ( item.cparam ) {
            //     cpcParam.push( item.cparam );
            // }
        })

        traceLog(eventID, {
            acms: acms,
            indexs: goodsIndex,
            iids: traceLogItemsInfo,
            eventid: eventID
        })
    }

    return dataStatics;
});
