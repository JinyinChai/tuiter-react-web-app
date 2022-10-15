const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <img src=${who.avatarIcon} class="img-fluid rounded-circle">
            </div>
            <div class="col-6">
                <p class="mt-0 mb-0"><strong>${who.userName} </strong><i class="fa fa-check-circle"></i></p><p class="mt-0 mb-0">${who.handle}</p>
            </div>
            <div class="col-4 mt-1">
                <button class="btn btn-primary rounded-pill float-end text-center">
                    <span>Follow</span>
                </button>
            </div>
        </div>
    </li>
    `);
}
export default WhoToFollowListItem;