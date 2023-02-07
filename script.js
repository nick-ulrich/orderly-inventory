"use strict";

const parentContainer = document.querySelector(".container");
const signInButton = document.querySelector(".sign-in-button");
const signInContainer = document.querySelector(".sign-in-container");
// const emailInput = document.querySelector(".input-1");
// const passwordInput = document.querySelector(".input-2").value;

// NAV
const logoutIcon = document.querySelector(".fa-sign-out-alt");
const hamburgerButton = document.querySelector(".hamburger-button");

// DASHBOARD
const inventoryTotal = document.querySelector(".inventory-total");
const inventoryLow = document.querySelector(".inventory-low");
const diffItems = document.querySelector(".different-items-total");
const inventoryOOS = document.querySelector(".out-of-stock-item");
const yourStoreHeader = document.querySelector(".your-store");
const weekChildContainer = document.querySelector(".week-child-container");
const weekdayContent = document.querySelectorAll(".weekday-content");
const nextDelivery = document.querySelector(".next-delivery-container");

// ADDING INVENTORY
const nameItem = document.querySelector(".name-input");
// const unit = document.getElementById("unit");
const quantity = document.querySelector(".quantity-input");
const price = document.querySelector(".price-input");
const upc = document.querySelector(".upc-input");
const vendor = document.querySelector(".vendor-input");

const addItem = document.querySelector(".add-item");
// const nameOfItem = document.querySelector(".name-of-item");
// const unitOfItem = document.querySelector(".unit-of-item");
// const quantityOfItem = document.querySelector(".quantity-of-item");
const clearInvModul = document.querySelector(".confirm-delete-inventory-memo");
const clearInventoryButton = document.querySelector(".clear-inventory-button");

const inventoryItem = document.querySelector(".item");
const inventoryContainer = document.querySelector(".inventory");
const inventoryContentPar = document.querySelector(".inventory-content-parent");
const inventoryContent = document.querySelector(".inventory-content");
// const inventoryRowContainer = document.querySelector(
//   ".inventory-row-container"
// );
// const confirmDeleteContainer = document.querySelector(
//   ".confirm-deletion-container"
// );
const confirmDeleteYes = document.querySelector(".confirm-button-yes");
const confirmDeleteNo = document.querySelector(".confirm-button-no");
const totalItems = document.querySelector(".total-items");
const sortNameIcon = document.querySelector(".name-icon");
const sortQuantityIcon = document.querySelector(".quantity-icon");
const sortPriceIcon = document.querySelector(".price-icon");
const sortStatusIcon = document.querySelector(".status-icon");

// EDITING INVENTORY
const nameItemEdit = document.querySelector(".name-input_edit");
const unitEdit = document.getElementById("unit_edit");
const quantityEdit = document.querySelector(".quantity-input_edit");
const priceEdit = document.querySelector(".price-input_edit");
const upcEdit = document.querySelector(".upc-input_edit");
const vendorEdit = document.getElementById("vendor-input_edit");

// STORES PAGE
const addStoreModulButton = document.querySelector(".add-stores-button");
const addStoreModul = document.querySelector(".add-stores-modul");
const storeNumberInput = document.querySelector(".store-number-input");
const storeAddressInput = document.querySelector(".store-address-input");
const childAddStoreButton = document.querySelector(".child-add-stores-button");
const clearStoresButton = document.querySelector(".clear-stores-button");
const storeModulCloseButton = document.querySelector(
  ".add-stores-modul-close-button"
);
const storesGridContainer = document.querySelector(".stores-grid-container");

// INV MODUL DISPLAY / HIDE
const modulContainer = document.querySelector(".add-inventory-modul");
const openAddItemModul = document.querySelector(".open-modul");
const closeAddItemButton = document.querySelector(".close-modul");

const editItemModul = document.querySelector(".edit-inventory-modul");
const confirmEditItem = document.querySelector(".confirm-edit-item");
const closeEditItemModul = document.querySelector(".close-edit-modul");

// SWITCH BETWEEN SCREENS
const sidebarContainer = document.querySelector(".side-bar");
const sidebarContainerChild = document.querySelectorAll(".side-bar");
const dashContainer = document.querySelector(".dashboard");
const storesContainer = document.querySelector(".stores");
// const ordersContainer = document.querySelector(".orders-container");
const newOrderButton = document.querySelector(".create-new-order-button");
const manageOrderButton = document.querySelector(".manage-orders-button");
const manageOrder = document.querySelector(".manage-orders");

// ORDERS
const ordersButton = document.querySelector(".orders");
const clearFutureOrdersButton = document.querySelector(
  ".clear-futureorders-button"
);
const clearPastOrdersButton = document.querySelector(
  ".clear-pastorders-button"
);
const addOrdersModul = document.querySelector(".create-new-order");
const addItemsDeliveryButton = document.querySelector(".add-items-to-delivery");
const addedItemsCont = document.querySelector(".added-items-container");
const vendorItemsCont = document.querySelector(".vendor-items-container");
const submitOrderButton = document.querySelector(".submit-order-button");
const vendorNameInput = document.getElementById("vendor");
const orderContent = document.querySelector(".orders-content");
const pastOrderContent = document.querySelector(".past-orders-content");
const pastOrderContainer = document.querySelector(".past-orders-content");
const orderedItemsSheet = document.querySelector(".ordered-items-sheet");
const orderPlacedMemo = document.querySelector(".order-placed-memo");
const searchOrderInput = document.querySelector(".search-input_orders");
const searchPastOrderInput = document.querySelector(".search-input_pastorders");
const searchOrderButton = document.querySelector(".search-order-button");
const searchPastOrderButton = document.querySelector(
  ".search-pastorder-button"
);
const orderedItemsStatsCont = document.querySelector(
  ".ordered-items-stats-cont"
);
const deletePastOrdesMemo = document.querySelector(
  ".confirm-delete-pastorders-memo"
);
const dropDownPastOrdersIcon = document.querySelector(".fa-caret-down");
const resetDeliveryButton = document.querySelector(".reset-delivery");

// RECEIVING ORDER
const receiveOrderContainer = document.querySelector(
  ".receiving-order-container"
);
const receiveOrderContent = document.querySelector(".receiving-order-content");
const confirmCancelReceiveModul = document.querySelector(
  ".cancel-receiving-order_modul"
);
const orderReceivedMemo = document.querySelector(".order-received-memo");

// SEARCH FOR INV
const searchButton = document.querySelector(".search-button");
const searchInvInput = document.querySelector(".search-input_inventory");

// VENDOR
const vendorContainer = document.querySelector(".vendor");
const openVendorModulButton = document.querySelector(".add-vendor-button");
const addVendorModul = document.querySelector(".add-vendor-modul");
const closeVendorModul = document.querySelector(
  ".add-vendor-modul-close-button"
);
const vendorGrid = document.querySelector(".vendor-grid-container");
const addVendorButton = document.querySelector(".child-add-vendor-button");
const clearVendorsButton = document.querySelector(".clear-vendor-button");
const vendorPortfolio = document.querySelector(".vendor-portfolio");
const portfolioContent = document.querySelector(".vendor-portfolio-content");
const addItemToPortfolioModul = document.querySelector(
  ".add-item-portfolio-modul"
);
const addItemToPortfolioButton = document.querySelector(
  ".add-item-portfolio-button"
);
const itemNameInput = document.querySelector(".item-name-input_portfolio");
const itemCostInput = document.querySelector(".item-cost-input_portfolio");
const itemUpcInput = document.querySelector(".item-upc-input_portfolio");
const vendorPortButtonsCont = document.querySelector(
  ".vendor-portfolio-buttons"
);
const addItemToPortfolioCont = document.querySelector(
  ".add-item-portfolio-button-cont"
);

const sidebarChildren = [
  dashContainer,
  inventoryContainer,
  storesContainer,
  manageOrder,
  vendorContainer,
];

class newInventory {
  constructor(name, qty, cost, terminate, upc, vendor) {
    this.name = name;
    this.qty = qty;
    this.cost = cost;
    this.terminate = terminate;
    this.upc = upc;
    this.vendor = vendor;
    this.checkInventoryStatus();
  }
  checkInventoryStatus() {
    if (this.qty <= 2) {
      this.status = "Low";
    } else {
      this.status = "In Stock";
    }
  }
}

class newStore {
  constructor(storeNumber, address, telephone) {
    this.storeNumber = storeNumber;
    this.address = address;
    this.telephone = telephone;
  }
}

class newDay {
  constructor(dayNumber, numberOfWeek, year, description) {
    this.dayNumber = dayNumber;
    this.numberOfWeek = numberOfWeek;
    this.year = year;
    this.description = description;
  }
}

class newOrder {
  constructor(name, deliveryDate, items, paidStatus, uniqueOrderCode, arrived) {
    this.name = name;
    this.deliveryDate = deliveryDate;
    this.items = items;
    this.paidStatus = paidStatus;
    this.uniqueOrderCode = uniqueOrderCode;
    this.arrived = arrived;
    this.terminate = false;
    this.getQtyTotal();
    this.getCostTotal();
    this.getTimeStamp();
    this.getInvoice();
  }
  getQtyTotal() {
    let qtyTotal = 0;
    for (const each of this.items) {
      qtyTotal = qtyTotal + each.qty;
    }
    this.qty = qtyTotal;
  }
  getCostTotal() {
    let costTotal = 0;
    for (const each of this.items) {
      costTotal = costTotal + each.cost * each.qty;
    }
    this.costTotal = costTotal;
  }
  getTimeStamp() {
    const dd = new Date(this.deliveryDate);
    this.timeStamp = dd.getTime();
  }
  getInvoice() {
    this.invoice = Math.floor(Math.random() * 1000);
  }
}

class newItemForOrder {
  constructor(name, qty, upc, cost, vendor) {
    this.name = name;
    this.qty = qty;
    this.upc = upc;
    this.cost = cost;
    this.vendor = vendor;
    this.terminate = false;
    this.checkInventoryStatus();
  }
  checkInventoryStatus() {
    if (this.qty <= 2) {
      this.status = "Low";
    } else {
      this.status = "In Stock";
    }
  }
}

class newVendor {
  constructor(name, uniqueVendorCode) {
    this.name = name;
    this.uniqueVendorCode = uniqueVendorCode;
    this.items = [];
  }
}

class newItemForVendor {
  constructor(name, cost, upc) {
    this.name = name;
    this.cost = cost;
    this.upc = upc;
    this.terminate = false;
  }
}

class Master {
  #inventory = [];
  #stores = [];
  #orders = [];
  #pastOrders = [];
  #tempOrder = [];
  #vendors = [];
  #selectedVendor;
  #calendarWeekArr = [];
  uniqueProductCode = 0;
  uniqueOrderCode = 0;
  uniqueVendorCode = 0;
  purgatoryForOrderedItems = [];
  nameIndicator = 0;
  qtyIndicator = 0;
  priceIndicator = 0;
  availIndicator = 0;
  ordersTracker = 0;
  newVendorCreated;
  itemToBeEditedUPC;
  pastOrdersView = true;
  compactSidebarTracker = 0;
  ellipsisButtonTracker = 0;
  itemExists = false;
  constructor() {
    sidebarContainer.addEventListener("click", this.togglePages.bind(this));
    sortNameIcon.addEventListener("click", this.sortInventoryByName.bind(this));
    sortQuantityIcon.addEventListener(
      "click",
      this.sortInventoryByQuantity.bind(this)
    );
    sortPriceIcon.addEventListener(
      "click",
      this.sortInventoryByPrice.bind(this)
    );
    sortStatusIcon.addEventListener(
      "click",
      this.sortInventoryByAvailability.bind(this)
    );
    openAddItemModul.addEventListener(
      "click",
      this.openAddItemModul.bind(this)
    );
    closeAddItemButton.addEventListener(
      "click",
      this.closeAddItemModul.bind(this)
    );
    confirmEditItem.addEventListener("click", this.editInventory.bind(this));
    closeEditItemModul.addEventListener(
      "click",
      this.closeEditItemModul.bind(this)
    );
    addItem.addEventListener("click", this.addInventory.bind(this));
    addStoreModulButton.addEventListener(
      "click",
      this.openAddStoreModul.bind(this)
    );
    storeModulCloseButton.addEventListener(
      "click",
      this.closeAddStoreModul.bind(this)
    );
    childAddStoreButton.addEventListener("click", this.addStore.bind(this));
    clearInventoryButton.addEventListener(
      "click",
      this.clearInventory.bind(this)
    );
    clearStoresButton.addEventListener("click", this.clearStores.bind(this));
    searchButton.addEventListener("click", this.searchForInventory.bind(this));
    newOrderButton.addEventListener("click", this.openNewOrderPage.bind(this));
    manageOrderButton.addEventListener("click", () => {
      manageOrder.style.display = "block";
    });
    addItemsDeliveryButton.addEventListener(
      "click",
      this.openAddItemsToDeliveryModul.bind(this)
    );
    submitOrderButton.addEventListener("click", this.submitOrder.bind(this));
    searchOrderButton.addEventListener(
      "click",
      this.searchForInventory.bind(this)
    );
    searchPastOrderButton.addEventListener(
      "click",
      this.searchPastOrders.bind(this)
    );
    dropDownPastOrdersIcon.addEventListener("click", () => {
      console.log("clicked");
      this.toggleViewPastOrders();
    });
    clearPastOrdersButton.addEventListener(
      "click",
      this.clearPastOrders.bind(this)
    );
    openVendorModulButton.addEventListener("click", () => {
      addVendorModul.style.display = "block";
      const vendorNameInput = document.querySelector(".vendor-name-input");
      vendorNameInput.focus();
    });
    addVendorButton.addEventListener("click", this.addVendor.bind(this));
    closeVendorModul.addEventListener("click", () => {
      addVendorModul.style.display = "none";
    });
    clearVendorsButton.addEventListener("click", this.clearVendors.bind(this));
    hamburgerButton.addEventListener(
      "click",
      this.openCompactSideBar.bind(this)
    );
  }
  signIn() {
    this.getLocalStorage();
    this.updateDashboard();
    this.updateInventoryQuantity();

    console.log("Current inventory:");
    console.log(this.#inventory);
    console.log("Vendors:");
    console.log(this.#vendors);
  }
  signOut() {
    // remove inventory, stores, & orders DOM to prevent repeated elements
    /*
    inventoryContent.innerHTML = "";
    orderContent.innerHTML = "";
    storesGridContainer.innerHTML = "";
    weekdayContent.innerHTML = "";
    */
    location.reload();

    // i can create a new method (executed here) that loops over each day and removes content
    /*
    parentContainer.style.display = "none";
    manageOrder.style.display = "none";
    addOrdersModul.style.display = "none";
    signInContainer.style.display = "block";
    */
  }
  getLocalStorage() {
    // using 'if (data)' was not working, so I used 'if (data !== null)'

    // get stores
    const storeData = JSON.parse(localStorage.getItem("stores"));
    if (storeData !== null || storeData.length > 0) {
      this.#stores = storeData;

      this.#stores.forEach((store) => {
        this.addStoreToDOM(store);
      });
    }

    // get inventory
    const inventoryData = JSON.parse(localStorage.getItem("inventory"));
    if (inventoryData !== null && inventoryData.length > 0) {
      this.#inventory = inventoryData;
      this.sortInventoryByNameWhenReceiving();

      this.#inventory.forEach((inv) => {
        this.addInventoryToDOM(inv);
      });

      // re-assign uniqueProductCode for inventory
      this.uniqueProductCode = this.#inventory[this.#inventory.length - 1].upc;
    }

    // 'if(data !== null)' wasn't working for following code, used '.length' instead

    // get orders
    const ordersData = JSON.parse(localStorage.getItem("orders"));
    if (ordersData !== null && ordersData.length > 0) {
      this.#orders = ordersData;

      // re-assign uniqueOrderCode for orders
      this.uniqueOrderCode =
        this.#orders[this.#orders.length - 1].uniqueOrderCode;

      this.#orders.forEach((order) => {
        this.addOrdersToDOM(order);
      });
    }

    // get past orders
    const pastOrdersData = JSON.parse(localStorage.getItem("pastOrders"));
    if (pastOrdersData !== null && pastOrdersData.length > 0) {
      this.#pastOrders = pastOrdersData;

      this.#pastOrders.forEach((order) => {
        this.addOrderToPastOrdersDOM(order);
      });
    }

    // get vendors
    const vendorsData = JSON.parse(localStorage.getItem("vendors"));
    if (vendorsData !== null && vendorsData.length > 0) {
      this.#vendors = vendorsData;

      console.log("All vendors:");
      console.log(this.#vendors);

      // find largest uniqueVendorCode
      let tempCode = 0;
      this.#vendors.forEach((vendor) => {
        if (vendor.uniqueVendorCode > tempCode) {
          tempCode = vendor.uniqueVendorCode;
        }
      });
      this.uniqueVendorCode = tempCode;

      //this.#vendors[this.#vendors.length - 1].uniqueVendorCode;

      this.#vendors.forEach((vendor) => {
        this.addVendorToDOM(vendor);
      });
    }
  }
  setLocalStorage() {
    localStorage.setItem("inventory", JSON.stringify(this.#inventory));
    localStorage.setItem("stores", JSON.stringify(this.#stores));
    localStorage.setItem("orders", JSON.stringify(this.#orders));
    localStorage.setItem("pastOrders", JSON.stringify(this.#pastOrders));
    localStorage.setItem("vendors", JSON.stringify(this.#vendors));
  }
  updateDashboard() {
    // new calendar code
    this.#calendarWeekArr = [];
    const today = new Date();
    const indexDay = today.getDay();

    // get past days of week
    let q = 1;
    while (q <= indexDay) {
      const dt = new Date();
      dt.setDate(dt.getDate() - q);
      //this.#calendarWeekArr.push(dt.toString().slice(8, 15));
      this.#calendarWeekArr.push(dt);

      this.updateCalendarDOM(dt);
      q++;
    }

    // get future days of week
    let x = 0;
    while (x <= 6 - indexDay) {
      const dt = new Date();
      dt.setDate(dt.getDate() + x);
      //this.#calendarWeekArr.push(dt.toString().slice(8, 15));
      this.#calendarWeekArr.push(dt);

      this.updateCalendarDOM(dt);
      x++;
    }

    // fade other days of the week
    const weekdaysArr = [...weekChildContainer.children];
    for (const day of weekdaysArr) {
      const dayID = day.getAttribute("data-id");
      if (dayID !== today.getDay().toString()) {
        const letter = document.querySelector(`.week-letter_${dayID}`);
        const number = document.querySelector(`.weekday-number_${dayID}`);
        letter.style.color = "#e0e0e0";
        number.style.color = "#e0e0e0";
        day.style.backgroundColor = "#adadad";
        day.style.opacity = "0.85";
      }
    }

    // re-order orders array based on delivery date
    this.#orders.sort((a, b) => {
      return a.timeStamp - b.timeStamp;
    });

    console.log("orders:");
    console.log(this.#orders);

    const now = new Date();
    now.setDate(now.getDate() - 1);

    // set next delivery date (if one exists)
    for (const order of this.#orders) {
      // is the delivery date greater than yesterday's date?
      if (new Date(order.deliveryDate).getTime() > now) {
        let deliveryArriving;
        nextDelivery.innerHTML = "";
        //const order = this.#orders[0];

        if (Number(order.deliveryDate.slice(3, 5)) === today.getDate()) {
          deliveryArriving = "Today";
        } else if (
          Number(order.deliveryDate.slice(3, 5)) ===
          today.getDate() + 1
        ) {
          deliveryArriving = "Tomorrow";
        } else {
          deliveryArriving = order.deliveryDate;
        }
        const html = `
          <h3 class="next-del-day font-reg">${deliveryArriving}</h3>
          <div class="next-del-parent font-reg grid">
            <div class="next-del-vendor-container">
              <p class="vendor-tag">Vendor</p>
              <p class="next-del-vendor next-del-stat">${order.name}</p>
            </div>
            <div class="next-del-date-container">
              <p class="date-tag">Quantity</p>
              <div class="next-del-stat">
              <span class="next-del-qty next-del-stat">${
                order.qty
              }<span>items</span></span>
              </div>
            </div>
            <div class="next-del-invoice-container">
              <p class="invoice-tag">Invoice</p>
              <p class="next-del-date next-del-stat">${order.invoice}</p>
            </div>
            <div class="next-del-invoice-container">
              <p class="invoice-tag">Cost</p>
              <p class="next-del-stat">$${order.costTotal.toFixed(2)}</p>
            </div>
          </div>`;
        nextDelivery.insertAdjacentHTML("beforeend", html);

        // post orders to calendar
        for (const order of this.#orders) {
          for (const day of this.#calendarWeekArr) {
            if (
              order.deliveryDate.slice(3, 5) === day.toString().slice(8, 10)
            ) {
              const html = `
            <p class="order-in-calendar">${order.name}</p>`;

              const deliveryDay = document.querySelector(
                `.weekday-content_${day.getDay()}`
              );
              deliveryDay.insertAdjacentHTML("beforeend", html);
            }
          }
        }
        return;
      } else {
        nextDelivery.innerHTML = `<p class="no-next-delivery"> data unavailable </p>`;
      }
    }
    if (this.#orders.length < 1) {
      nextDelivery.innerHTML = `<p class="no-next-delivery"> data unavailable </p>`;
    }
  }
  updateCalendarDOM(day) {
    const weekDayCont = document.querySelector(
      `.weekday-content_${day.getDay()}`
    );

    weekDayCont.innerHTML = "";

    const html = `<div class="weekday-number weekday-number_${day.getDay()}">${day.getDate()}</div>`;

    weekDayCont.insertAdjacentHTML("beforeend", html);

    // Mobile View:

    // const weekDayContCompact = document.querySelector(
    //   `.weekday-content_compact`
    // );
    // const weekLetterCompact = document.querySelector(
    //   `.week-letter-cont_compact`
    // );

    const today = new Date();

    let todayLetter;
    if (today.getDay() === 0) {
      todayLetter = "Sunday";
    } else if (today.getDay() === 1) {
      todayLetter = "Monday";
    } else if (today.getDay() === 2) {
      todayLetter = "Tuesday";
    } else if (today.getDay() === 3) {
      todayLetter = "Wednesday";
    } else if (today.getDay() === 4) {
      todayLetter = "Thursday";
    } else if (today.getDay() === 5) {
      todayLetter = "Friday";
    } else if (today.getDay() === 6) {
      todayLetter = "Saturday";
    }

    // if (weekDayContCompact.innerHTML === "") {
    //   const html1 = `<h2 class="week-letter_compact">${todayLetter}</h2>`;
    //   weekLetterCompact.insertAdjacentHTML("beforeend", html1);

    //   const html2 = `<div class="weekday-number">${today.getDate()}</div>`;
    //   weekDayContCompact.insertAdjacentHTML("beforeend", html2);
    // }
  }
  openAddItemModul() {
    console.log("fired");

    modulContainer.style.display = "block";

    nameItem.value = "";
    quantity.value = "";
    vendor.value = "";
    vendor.innerHTML = "";

    const html1 = `<option value=""></option>`;
    vendor.insertAdjacentHTML("beforeend", html1);

    for (const ven of this.#vendors) {
      const html2 = `<option value="${ven.name}">${ven.name}</option>`;
      vendor.insertAdjacentHTML("beforeend", html2);
    }
  }
  closeAddItemModul() {
    modulContainer.style.display = "none";
  }
  editItemModul(editedItem) {
    editItemModul.style.display = "block";

    nameItemEdit.value = editedItem.name;
    quantityEdit.value = editedItem.qty;
    priceEdit.value = editedItem.cost;
    vendorEdit.textContent = editedItem.vendor;
    upcEdit.textContent = editedItem.upc;
  }
  closeEditItemModul() {
    editItemModul.style.display = "none";
  }
  addInventory() {
    if (!nameItem.value || !quantity.value) {
      alert(`Missing field.`);
      return;
    }
    this.uniqueProductCode = this.uniqueProductCode + 1;

    const newInvInst = new newInventory(
      nameItem.value,
      quantity.value,
      price.value,
      false,
      upc.value,
      vendor.value
    );

    this.#inventory.push(newInvInst);
    console.log(newInvInst);
    console.log(this.#inventory);

    nameItem.value = "";
    quantity.value = "";
    price.value = "";
    upc.value = "";
    vendor.value = "";

    this.setLocalStorage();
    this.closeAddItemModul();
    this.sortInventoryByNameWhenReceiving();
    this.addInventoryToDOM(newInvInst);
    this.updateInventoryQuantity();
  }
  editInventory() {
    const findItemToEdit = this.#inventory.find((inv) => {
      return inv.upc === this.itemToBeEditedUPC;
    });
    console.log(findItemToEdit);

    findItemToEdit.name = nameItemEdit.value;
    //findItemToEdit.unit = unitEdit.value;
    findItemToEdit.qty = quantityEdit.value;
    findItemToEdit.cost = priceEdit.value;
    findItemToEdit.vendor = vendorEdit.value;

    // edit inventory
    if (findItemToEdit.qty <= 2) {
      findItemToEdit.status = "Low";
    } else {
      findItemToEdit.status = "In Stock";
    }
    // update inv quantity
    this.updateInventoryQuantity();
    // update DOM
    this.updateInventoryDOM(findItemToEdit);
    // update local storage
    this.setLocalStorage();

    console.log(findItemToEdit);

    const nameToEdit = document.querySelector(`.name_${findItemToEdit.upc}`);
    const quantityToEdit = document.querySelector(
      `.quantity_${findItemToEdit.upc}`
    );
    nameToEdit.textContent = findItemToEdit.name;
    quantityToEdit.textContent = findItemToEdit.qty;

    // reset text fields & close modul
    editItemModul.style.display = "none";
  }
  togglePages(e) {
    if (e.target === sidebarContainer) {
      return;
    }

    const target = e.target.getAttribute("data-id");

    for (const item of sidebarContainer.children) {
      item.style.backgroundColor = "#353e47";
    }

    const selectedTab = document.querySelector(`.${target}-button`);

    selectedTab.style.backgroundColor = "#626970";

    const selectedScreen = document.querySelector(`.${target}`);

    if (target === "orders") {
      newOrderButton.style.display = "flex";
      manageOrderButton.style.display = "flex";

      if (this.ordersTracker === 0) {
        this.ordersTracker = this.ordersTracker + 1;
      } else {
        this.ordersTracker = 0;
        newOrderButton.style.display = "none";
        manageOrderButton.style.display = "none";
      }
    } else {
      sidebarChildren.forEach(function (item) {
        item.style.display = "none";
      });
      vendorPortButtonsCont.innerHTML = "";
      //addItemToPortfolioCont.innerHTML = "";
      addOrdersModul.style.display = "none";
      vendorPortfolio.style.display = "none";
      receiveOrderContainer.innerHTML = "";
      receiveOrderContainer.style.display = "none";
      addItemToPortfolioModul.style.display = "none";
      /*
      newOrderButton.style.display = "none";
        manageOrderButton.style.display = "none";
        */
      selectedScreen.style.display = "block";
    }

    // if no past orders exist
    if (
      manageOrder.style.display === "block" &&
      this.#pastOrders.length === 0
    ) {
      pastOrderContainer.innerHTML = `<p class="no-next-delivery">data unavailable</p>`;
    }

    /* trying to use hover effect no success
    for (const item of sidebarContainer.children) {
      if (item !== selectedTab) {
        item.style.backgroundColor = "#40739e";
      }
      //item.style.backgroundColor = "#40739e";
    } */
  }
  openAddStoreModul() {
    addStoreModul.style.display = "block";
  }
  closeAddStoreModul() {
    addStoreModul.style.display = "none";
  }
  addStore() {
    const newStoreInst = new newStore(
      storeNumberInput.value,
      storeAddressInput.value
    );

    this.#stores.push(newStoreInst);

    this.setLocalStorage();
    this.closeAddStoreModul();
    this.addStoreToDOM(newStoreInst);

    storeNumberInput.value = "";
    storeAddressInput.value = "";

    console.log(this.#stores);
  }
  addInventoryToDOM(item) {
    // change color based on quantity status
    let qtyStatus;
    if (item.status === "Low") {
      qtyStatus = "low";
    } else {
      qtyStatus = "instock";
    }

    const html = `<div class="inventory-row-container font-reg grid" data-id="${item.upc}">
    <p class="name_${item.upc} item-inventory_name">${item.name}</p>
    <p class="quantity_${item.upc} inv-content_quantity">${item.qty}</p>
    <p class="price_${item.upc}">${item.cost}</p>
    <div class="status-container_${item.upc} status-container ${qtyStatus}"><p>${item.status}</p></div>
    <div class="vendor_${item.upc}">${item.vendor}</div>
    <div class="inventory-actions-container">
        <i class="fas fa-edit edit-button_${item.upc} edit-button" aria-hidden="true"></i>
        <i class="fas fa-trash delete-button_${item.upc} delete-button" aria-hidden="true"></i>
    </div>
    <div class="ellipsis-container">
      <i class="fas fa-ellipsis-h_${item.upc} fa-ellipsis-h"></i>
    </div>
    <div class="inventory-actions-container_compact_${item.upc} inventory-actions-container_compact">
      <p>Actions</p>
      <i class="fas fa-edit edit-button_${item.upc} edit-button" aria-hidden="true"></i>
      <i class="fas fa-trash delete-button_${item.upc} delete-button" aria-hidden="true"></i>
    </div>
  </div>`;

    inventoryContentPar.insertAdjacentHTML("afterbegin", html);

    const actionsCompactCont = document.querySelectorAll(
      `.inventory-actions-container_compact_${item.upc}`
    );

    // DELETE ITEM FROM INVENTORY ////////////////
    // had issues placing in own method
    const deleteButton = document.querySelectorAll(
      `.delete-button_${item.upc}`
    );

    for (const btn of deleteButton) {
      btn.addEventListener("click", () => {
        const getDataIDFromHTML = btn
          .closest(`.inventory-row-container`)
          .getAttribute("data-id");

        const invContainerChildren = inventoryContentPar.children;

        // remove from inventory array
        this.#inventory = this.#inventory.filter(function (item) {
          return item.upc !== getDataIDFromHTML;
        });

        //remove dom element
        for (const element of invContainerChildren) {
          if (element.getAttribute("data-id") === getDataIDFromHTML) {
            element.remove();
            // remove local storage
            // parse, use slice to remove specific item, stringify again
          }
        }
        this.setLocalStorage();
        this.updateInventoryQuantity();
      });
    }

    // EDIT ITEM IN INVENTORY ////////////////////
    const editButton = document.querySelectorAll(`.edit-button_${item.upc}`);

    for (const btn of editButton) {
      btn.addEventListener("click", () => {
        const editedItem = this.#inventory.find((inv) => {
          return inv.upc === item.upc;
        });
        this.itemToBeEditedUPC = item.upc;
        this.editItemModul(editedItem);
      });
    }

    // Mobile View
    const ellipsisButton = document.querySelectorAll(
      `.fa-ellipsis-h_${item.upc}`
    );

    for (const each of ellipsisButton) {
      each.addEventListener("click", (e) => {
        const actionsModul = document.querySelectorAll(
          `.inventory-actions-container_compact_${item.upc}`
        );

        this.ellipsisButtonTracker++;
        if (this.ellipsisButtonTracker === 1) {
          for (const one of actionsModul) {
            one.style.display = "block";
          }
          this.ellipsisButtonTracker = 2;
        } else {
          for (const one of actionsCompactCont) {
            one.style.display = "none";
          }
          this.ellipsisButtonTracker = 0;
        }
      });
    }

    for (const item of actionsCompactCont) {
      item.style.display = "none";
    }
  }
  updateInventoryDOM(item) {
    const itemQty = document.querySelector(`.quantity_${item.upc}`);
    itemQty.textContent = item.quantity;
    const statusCont = document.querySelector(`.status-container_${item.upc}`);
    statusCont.innerHTML = `<p>${item.status}</p>`;
    const priceCont = document.querySelector(`.price_${item.upc}`);
    priceCont.textContent = item.cost;
    const vendorCont = document.querySelector(`.vendor_${item.upc}`);
    vendorCont.textContent = item.vendor;

    if (item.status === "Low") {
      statusCont.classList.remove(`instock`);
      statusCont.classList.add(`low`);
    } else {
      statusCont.classList.remove(`low`);
      statusCont.classList.add(`instock`);
    }
  }
  addStoreToDOM(store) {
    const storesGridContainer = document.querySelector(
      ".stores-grid-container"
    );
    const html = `
    <div class="new-store-container font-reg new-store-container_${store.storeNumber} grid">
    <i class="fas fa-store"></i>
    <div class="new-store-header">
      <h1 class="new-store-number">${store.storeNumber}</h1>
      <i class="fas fa-crown crown_${store.storeNumber}" style="display: none"></i>
    </div>
    <p class="new-store-address">${store.address}</p>
    </div>`;

    storesGridContainer.insertAdjacentHTML("beforeend", html);

    const crownIcon = document.querySelector(`.crown_${store.storeNumber}`);
    const newStoreContainer = document.querySelector(
      `.new-store-container_${store.storeNumber}`
    );

    newStoreContainer.addEventListener("mouseover", () => {
      crownIcon.style.display = "block";
    });
    newStoreContainer.addEventListener("mouseout", () => {
      crownIcon.style.display = "none";
    });
    crownIcon.addEventListener("click", () => {
      // set icon display to block
      crownIcon.style.display = "block";
      yourStoreHeader.textContent = `${store.storeNumber}`;
      return;
    });
  }
  clearStores() {
    this.#stores = [];
    localStorage.removeItem("stores");

    const storesGridContainer = document.querySelector(
      ".stores-grid-container"
    );

    storesGridContainer.innerHTML = "";
  }
  clearInventory() {
    clearInvModul.style.display = "block";

    const confirmDeleteInv = document.querySelector(".yes-confirm-delete-inv");
    const denyDeleteInv = document.querySelector(".no-confirm-delete-inv");

    confirmDeleteInv.addEventListener("click", () => {
      console.log("Confirm delete inventory");
      this.#inventory = [];
      this.uniqueProductCode = 0;
      inventoryContentPar.innerHTML = "";

      localStorage.removeItem("inventory");
      this.updateInventoryQuantity();
      clearInvModul.style.display = "none";

      console.log("Updated Inv");
      console.log(this.#inventory);
    });

    denyDeleteInv.addEventListener("click", () => {
      clearInvModul.style.display = "none";
    });

    console.log(this.#inventory);
  }
  updateInventoryQuantity() {
    if (this.#inventory.length === 0) {
      totalItems.textContent =
        "There are no items in your inventory. Click 'Add Inventory' to add items.";
    }

    // total inventory
    let total = 0;
    for (const item of this.#inventory) {
      total = total + Number(item.qty);
    }
    if (total === 0) {
      total = "0";
    }

    // total amt of different items
    let totalDiff = 0;
    for (const item of this.#inventory) {
      totalDiff = totalDiff + 1;
    }
    if (totalDiff === 0) {
      totalDiff = "0";
    }

    // total low inventory
    let totalLow = 0;
    for (const item of this.#inventory) {
      if (item.status === "Low") totalLow = totalLow + 1;
    }
    if (totalLow === 0) {
      totalLow = "0";
    }

    // total out-of-stock inventory
    let totalOutOfStock = 0;
    for (const item of this.#inventory) {
      if (item.qty === 0) {
        totalOutOfStock = totalOutOfStock + 1;
      }
    }

    //post totals
    totalItems.textContent = total; //foot of inventory page
    inventoryTotal.textContent = total;
    // inventoryTotalCompact.textContent = total;
    diffItems.textContent = totalDiff;
    // diffItemsCompact.textContent = totalDiff;
    inventoryLow.textContent = totalLow;
    // inventoryLowCompact.textContent = totalLow;
    inventoryOOS.textContent = totalOutOfStock;
    // inventoryOOSCompact.textContent = totalOutOfStock;
  }
  sortInventoryByName() {
    inventoryContentPar.innerHTML = "";

    if (this.nameIndicator === 0) {
      this.#inventory.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        if (textA > textB) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      this.#inventory.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        if (textB > textA) {
          return 1;
        } else {
          return -1;
        }
      });
    }

    if (this.nameIndicator === 1) {
      this.nameIndicator = -1;
    }
    /*
    // remove all elements from dom before resorting
    const invContainerChildren = [...inventoryContent.children];
    for (const item of invContainerChildren) {
      item.remove();
    } */
    /*
    // Bug: wasn't looping over first AND last element in html collection
    invContainerChildren[invContainerChildren.length - 1].remove();
    invContainerChildren[0].remove(); */

    for (const item of this.#inventory) {
      this.addInventoryToDOM(item);
    }
    this.nameIndicator++;
  }
  sortInventoryByNameWhenReceiving() {
    //inventoryContentPar.innerHTML = "";

    if (this.nameIndicator === 0) {
      this.#inventory.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        if (textA > textB) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      this.#inventory.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        if (textB > textA) {
          return 1;
        } else {
          return -1;
        }
      });
    }
  }
  sortInventoryByQuantity() {
    this.qtyIndicator++;

    if (this.qtyIndicator === 2) {
      this.qtyIndicator = 0;
    }

    if (this.qtyIndicator === 1) {
      this.#inventory.sort((a, b) => {
        const qtyA = a.qty;
        const qtyB = b.qty;
        if (qtyA > qtyB) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (this.qtyIndicator === 0) {
      this.#inventory.sort((a, b) => {
        const qtyA = a.qty;
        const qtyB = b.qty;
        if (qtyB > qtyA) {
          return 1;
        } else {
          return -1;
        }
      });
    }

    // remove all elements from dom before resorting
    const invContainerChildren = [...inventoryContentPar.children];
    for (const item of invContainerChildren) {
      item.remove();
    }
    // add elements back to dom
    for (const item of this.#inventory) {
      this.addInventoryToDOM(item);
    }
  }
  sortInventoryByPrice() {
    this.priceIndicator++;

    if (this.priceIndicator === 1) {
      this.#inventory.sort((a, b) => {
        const qtyA = a.cost;
        const qtyB = b.cost;
        if (qtyA > qtyB) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      this.#inventory.sort((a, b) => {
        const qtyA = a.cost;
        const qtyB = b.cost;
        if (qtyB > qtyA) {
          return 1;
        } else {
          return -1;
        }
      });
    }

    if (this.priceIndicator === 2) {
      this.priceIndicator = 0;
    }

    // remove all elements from dom before resorting
    const invContainerChildren = [...inventoryContentPar.children];
    for (const item of invContainerChildren) {
      item.remove();
    }

    for (const item of this.#inventory) {
      this.addInventoryToDOM(item);
    }
  }
  sortInventoryByAvailability() {
    this.availIndicator++;

    if (this.availIndicator === 1) {
      this.#inventory.sort((a, b) => {
        const qtyA = a.status;
        const qtyB = b.status;
        if (qtyA > qtyB) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      this.#inventory.sort((a, b) => {
        const qtyA = a.status;
        const qtyB = b.status;
        if (qtyB > qtyA) {
          return 1;
        } else {
          return -1;
        }
      });
    }

    if (this.availIndicator === 2) {
      this.availIndicator = 0;
    }

    // remove all elements from dom before resorting
    const invContainerChildren = [...inventoryContentPar.children];
    for (const item of invContainerChildren) {
      item.remove();
    }

    for (const item of this.#inventory) {
      this.addInventoryToDOM(item);
    }
  }
  sortVendorsByName() {
    inventoryContentPar.innerHTML = "";

    if (this.nameIndicator === 0) {
      this.#vendors.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        if (textA > textB) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      this.#vendors.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        if (textB > textA) {
          return 1;
        } else {
          return -1;
        }
      });
    }
  }
  searchForInventory() {
    let searchInputValue;
    const objNames = [];
    const searchResults = [];

    if (inventoryContainer.style.display === "block") {
      searchInputValue = [...searchInvInput.value];
      this.#inventory.forEach(function (item) {
        objNames.push(item);
      });

      // take each letter inputed into search bar and compare it to each item's corresponding index value
      for (let x = 0; x < searchInputValue.length; x++) {
        console.log(`input ${searchInputValue[x]}`);

        for (let q = 0; q < objNames.length; q++) {
          // if item is not marked to be deleted it will be evaluated
          console.log(objNames[q].terminate);
          if (objNames[q].terminate === false) {
            console.log(
              `evaluating ${objNames[q].name} & ${objNames[q].vendor}`
            );

            console.log(objNames[q].name[x]);
            console.log();
            console.log(objNames[q].vendor[x]);
            console.log(`x ${x}`);
            // does searchInputValue[x] === objNames[q][t]
            if (
              searchInputValue[x].toLowerCase() !==
                objNames[q].name[x].toLowerCase() &&
              searchInputValue[x].toLowerCase() !==
                objNames[q].vendor[x].toLowerCase()
            ) {
              console.log(`❌`);
              objNames[q].terminate = true;
              //objNames.splice(q, 1);
            } else {
              console.log(`letters match ✅`);
              if (x === searchInputValue.length - 1) {
                searchResults.push(objNames[q]);
              }
            }
          } else {
            continue;
          }
        }
      }
      console.log("search results");
      console.log(searchResults);
    }

    // SEARCH FOR ORDERS
    //
    if (manageOrder.style.display === "block") {
      const searchInputValue = [...searchOrderInput.value];
      this.#orders.forEach(function (item) {
        objNames.push(item);
      });

      // take each letter inputed into search bar and compare it to each item's corresponding index value
      for (let x = 0; x < searchInputValue.length; x++) {
        console.log(`input ${searchInputValue[x]}`);

        for (let q = 0; q < objNames.length; q++) {
          // if item is not marked to be deleted it will be evaluated
          if (objNames[q].terminate === false) {
            console.log(`evaluating ${objNames[q].name}`);

            console.log(objNames[q].name[x]);
            console.log(`x ${x}`);
            // does searchInputValue[x] === objNames[q][t]
            if (
              searchInputValue[x].toLowerCase() !==
              objNames[q].name[x].toLowerCase()
            ) {
              console.log(`❌`);
              objNames[q].terminate = true;
              //objNames.splice(q, 1);
            } else {
              console.log(`letters match ✅`);
              if (x === searchInputValue.length - 1) {
                searchResults.push(objNames[q]);
              }
            }
          } else {
            continue;
          }
        }
      }
      console.log("search results");
      console.log(searchResults);
    }

    // reset all items.terminate to false
    for (const item of objNames) {
      item.terminate = false;
    }

    /*
    // remove all elements from dom before resorting
    const invContainerChildren = inventoryContent.children;
    for (const el of [...invContainerChildren]) {
      el.remove();
    } */

    if (inventoryContainer.style.display === "block") {
      inventoryContentPar.innerHTML = "";
      // add search results back to dom
      for (const item of searchResults) {
        this.addInventoryToDOM(item);
      }
      // return all inv items if search bar is blank
      if (searchInvInput.value === "") {
        inventoryContentPar.innerHTML = "";
        for (const item of this.#inventory) {
          this.addInventoryToDOM(item);
        }
      }
    }

    if (manageOrder.style.display === "block") {
      orderContent.innerHTML = "";
      // add search results back to dom
      for (const item of searchResults) {
        this.addOrdersToDOM(item);
      }
      // return all order items if search bar is blank
      if (searchOrderInput.value === "") {
        orderContent.innerHTML = "";
        for (const item of this.#orders) {
          this.addOrdersToDOM(item);
        }
      }
    }
  }
  searchPastOrders() {
    let searchInputValue;
    const objNames = [];
    const searchResults = [];

    searchInputValue = [...searchPastOrderInput.value];
    this.#pastOrders.forEach(function (item) {
      objNames.push(item);
    });

    console.log(objNames);

    // take each letter inputed into search bar and compare it to each item's corresponding index value
    for (let x = 0; x < searchInputValue.length; x++) {
      console.log(`input ${searchInputValue[x]}`);

      for (let q = 0; q < objNames.length; q++) {
        // if item is not marked to be deleted it will be evaluated
        if (objNames[q].terminate === false) {
          console.log(`evaluating ${objNames[q].name}`);

          console.log(objNames[q].name[x]);
          console.log(`x ${x}`);
          // does searchInputValue[x] === objNames[q][t]
          if (
            searchInputValue[x].toLowerCase() !==
            objNames[q].name[x].toLowerCase()
          ) {
            console.log(`❌`);
            objNames[q].terminate = true;
            //objNames.splice(q, 1);
          } else {
            console.log(`letters match ✅`);
            if (x === searchInputValue.length - 1) {
              searchResults.push(objNames[q]);
            }
          }
        } else {
          continue;
        }
      }
    }
    console.log("search results");
    console.log(searchResults);

    pastOrderContent.innerHTML = "";
    // add search results back to dom
    for (const item of searchResults) {
      this.addOrderToPastOrdersDOM(item);
    }
    // return all order items if search bar is blank
    if (searchPastOrderInput.value === "") {
      pastOrderContent.innerHTML = "";
      for (const item of this.#pastOrders) {
        this.addOrderToPastOrdersDOM(item);
      }
    }

    // reset all items.terminate to false
    for (const item of objNames) {
      item.terminate = false;
    }
  }
  openNewOrderPage() {
    addOrdersModul.style.display = "block";
    vendorNameInput.innerHTML = "";

    const html1 = `<option value=""></option>`;
    vendorNameInput.insertAdjacentHTML("beforeend", html1);

    for (const vendor of this.#vendors) {
      const html2 = `<option value="${vendor.name}">${vendor.name}</option>`;
      vendorNameInput.insertAdjacentHTML("beforeend", html2);
    }

    resetDeliveryButton.addEventListener(
      "click",
      this.resetDelivery.bind(this)
    );
  }
  openAddItemsToDeliveryModul() {
    addItemsDeliveryButton.style.pointerEvents = "none";
    addItemsDeliveryButton.style.opacity = "0.5";

    const estDeliveryDateInput = document.querySelector(
      ".estimated-delivery-date-input"
    );

    // open modul consisting of all vendor's products
    if (addedItemsCont.style.display === "block") {
      return;
    }

    // get vendor object based on input field
    const chosenVendor = this.#vendors.find((vendor) => {
      return vendorNameInput.value === vendor.name;
    });

    // all fields must be filled out before adding items to order
    if (!chosenVendor || !estDeliveryDateInput.value) {
      alert(`A vendor and delivery date must be selected before adding items.`);
      return;
    }

    // this.selectedVendor is used to make sure two vendors aren't selected for one order
    if (!this.#selectedVendor) {
      this.#selectedVendor = vendorNameInput.value;
    }

    console.log(this.#selectedVendor);
    console.log(vendorNameInput.value);
    console.log(vendorItemsCont.innerHTML);
    if (
      this.#selectedVendor !== vendorNameInput.value ||
      vendorItemsCont.innerHTML !== ""
    ) {
      alert(`Two different vendors cannot be added to the same order.`);
      return;
    }

    // qty of items are displayed if modul is re-opened
    for (const item of chosenVendor.items) {
      const foundedItem = this.#tempOrder.find((merch) => {
        return item.upc === merch.upc;
      });
      if (foundedItem) {
        console.log(foundedItem);
        const html = `
            <div class="vendor-row-container vendor-row-container_${foundedItem.upc}" data-id="${foundedItem.upc}">
              <p class="name_${foundedItem.upc}">${foundedItem.name}</p>
              <p class="price_${foundedItem.upc}" min="0">${foundedItem.cost}</p>
              <input class="order-quantity_${foundedItem.upc} min="0"" type="number" value="${foundedItem.qty}" />
            </div>`;
        addedItemsCont.insertAdjacentHTML("beforeend", html);
      } else {
        const html = `
          <div class="vendor-row-container vendor-row-container_${item.upc}" data-id="${item.upc}">
            <p class="name_${item.upc}">${item.name}</p>
            <p class="price_${item.upc}" min="0">${item.cost}</p>
            <input class="order-quantity_${item.upc} order-quantity" type="number" min="0"/>
          </div>`;
        addedItemsCont.insertAdjacentHTML("beforeend", html);
      }
    }

    const saveOrderButton = document.querySelector(".save-add-order-button");

    saveOrderButton.addEventListener("click", this.saveOrder.bind(this));
  }
  saveOrder() {
    orderedItemsStatsCont.innerHTML = "";
    vendorItemsCont.innerHTML = "";

    const itemsInOrder = document.querySelectorAll(".vendor-row-container");
    const estDeliveryDateInput = document.querySelector(
      ".estimated-delivery-date-input"
    );

    let orderGrandTotal = 0;
    // loop through all items in modul to determine what should be added to order and how much
    this.#tempOrder = [];
    let upcFromDom;
    let orderName;
    let orderCost;
    let orderQty;

    for (const row of [...itemsInOrder]) {
      upcFromDom = row.getAttribute("data-id");
      orderName = document.querySelector(`.name_${upcFromDom}`).textContent;
      orderCost = document.querySelector(`.price_${upcFromDom}`).textContent;
      orderQty = document.querySelector(`.order-quantity_${upcFromDom}`).value;
      // if item was not ordered skip to next DOM element
      if (Number(orderQty) < 1) continue;

      const itemToBeAdded = document.querySelector(
        `.vendor-row-container_${upcFromDom}`
      );

      itemToBeAdded.style.pointerEvents = "none";
      itemToBeAdded.style.opacity = "0.5";

      const newItemOrder = new newItemForOrder(
        orderName,
        Number(orderQty),
        upcFromDom,
        orderCost
      );
      this.#tempOrder.push(newItemOrder);

      console.log("saveOrder executed part2");
      console.log(this.#tempOrder);
      console.log(`end of loop order qty:${orderQty}`);
    }

    for (const item of this.#tempOrder) {
      console.log(`item to be added to dom:`);
      console.log(item);
      const totalCost = item.cost * item.qty;
      const html = `
    <div class="order-row-container" data-id="${item.upc}">
      <p class="name_${item.upc}">${item.name}</p>
      <p class="cost">${item.cost}</p>
      <p>x</p>
      <p class="order-quantity_${item.upc}">${item.qty}</p>
      <p>=</p>
      <p class="total">${totalCost.toFixed(2)}</p>
        <i class="fas fa-trash delete-order-button_${
          item.upc
        } delete-order-button delete-button" aria-hidden="true"></i>
    </div>`;
      vendorItemsCont.insertAdjacentHTML("beforeend", html);

      orderGrandTotal = orderGrandTotal + totalCost;

      // DELETE ITEM ON ORDER
      //////////////
      const deleteOrderButton = document.querySelector(
        `.delete-order-button_${item.upc}`
      );

      deleteOrderButton.addEventListener("click", () => {
        const getDataIDFromHTML = deleteOrderButton
          .closest(`.order-row-container`)
          .getAttribute("data-id");

        const vendorContentChildren = vendorItemsCont.children;

        console.log(this.#tempOrder);

        // remove from tempOrder array
        this.#tempOrder = this.#tempOrder.filter((merch) => {
          return getDataIDFromHTML !== merch.upc;
        });

        console.log(this.#tempOrder);

        //remove dom element
        for (const element of vendorContentChildren) {
          if (element.getAttribute("data-id") === getDataIDFromHTML) {
            element.remove();
            // remove local storage
            // parse, use slice to remove specific item, stringify again
          }
        }

        const vendorContainer = document.querySelector(
          `.vendor-row-container_${getDataIDFromHTML}`
        );
        const removedItemQty = document.querySelector(
          `.order-quantity_${getDataIDFromHTML}`
        );
        vendorContainer.style.pointerEvents = "auto";
        vendorContainer.style.opacity = "100";
        removedItemQty.value = "";

        orderGrandTotal = 0;
        for (const item of this.#tempOrder) {
          orderGrandTotal = orderGrandTotal + Number(item.cost);
        }
        orderedItemsStatsCont.innerHTML = "";
        const orderStatsHtml = `
    <div class="dd-stats">
      <p class="dd-tag tag">estimated delivery date</p>
      <p class="dd-value">${estDeliveryDateInput.value}</p>
    </div>
    <div class="total-stats">
      <p class="total-tag tag">total</p>
      <p class="total-value">$${orderGrandTotal.toFixed(2)}</p>
    </div>`;
        orderedItemsStatsCont.insertAdjacentHTML("beforeend", orderStatsHtml);
      });
    }

    const orderStatsHtml = `
    <div class="dd-stats">
      <p class="dd-tag tag">estimated delivery date</p>
      <p class="dd-value">${estDeliveryDateInput.value}</p>
    </div>
    <div class="total-stats">
      <p class="total-tag tag">total</p>
      <p class="total-value">$${orderGrandTotal.toFixed(2)}</p>
    </div>`;
    orderedItemsStatsCont.insertAdjacentHTML("beforeend", orderStatsHtml);
  }
  submitOrder() {
    addItemsDeliveryButton.style.pointerEvents = "auto";
    addItemsDeliveryButton.style.opacity = "1";
    // this.selectedVendor is used to make sure two vendors aren't selected for one order
    if (!this.#selectedVendor) {
      this.#selectedVendor = vendorNameInput.value;
    }
    console.log(vendorNameInput.value);
    if (this.#selectedVendor !== vendorNameInput.value) {
      alert(`Two different vendors cannot be added to the same order.`);
      return;
    }

    // check if delivery date is valid
    const estDeliveryDateInput = document.querySelector(
      ".estimated-delivery-date-input"
    );
    const dd = new Date(estDeliveryDateInput.value);
    const cd = new Date();
    if (dd.getTime() < cd.getTime()) {
      alert(`Invalid delivery date`);
      return;
    }

    this.uniqueOrderCode = this.uniqueOrderCode + 1;

    const newOrderInst = new newOrder(
      vendorNameInput.value,
      estDeliveryDateInput.value,
      this.#tempOrder,
      "unpaid",
      this.uniqueOrderCode,
      false
    );
    console.log(newOrderInst);

    this.#orders.push(newOrderInst);
    console.log(`orders:`);
    console.log(this.#orders);
    this.#tempOrder = [];

    // convert date input to date object
    const spreadDate = [...estDeliveryDateInput.value];
    const deliveryDateObj = new Date(
      spreadDate[0] +
        spreadDate[1] +
        " " +
        spreadDate[3] +
        spreadDate[4] +
        " " +
        spreadDate[6] +
        spreadDate[7] +
        spreadDate[8] +
        spreadDate[9]
    );

    const deliveryDay = deliveryDateObj.getDate();
    const deliveryYear = deliveryDateObj.getFullYear();

    let deliveryDate;

    // if deliveryDay.length is 1, then add a 0 to the front
    if (deliveryDay.toString().length === 1) {
      deliveryDate =
        "0" + deliveryDay.toString() + " " + deliveryYear.toString();
    } else {
      deliveryDate = deliveryDay.toString() + " " + deliveryYear.toString();
    }

    for (const item of this.#calendarWeekArr) {
      if (item === deliveryDate) {
        // add delivery to calendar
      }
    }

    // post objects to DOM
    this.addOrdersToDOM(this.#orders[this.#orders.length - 1]);

    // reset fields
    vendorNameInput.value = "";
    estDeliveryDateInput.value = "";
    addedItemsCont.innerHTML = "";
    vendorItemsCont.innerHTML = "";
    orderedItemsStatsCont.innerHTML = `<p>$0</p>`;

    // update local storage
    this.setLocalStorage();
    console.log(this.#orders);

    //update dash
    this.updateDashboard();

    //reset selectedVendor
    this.#selectedVendor = null;
    console.log(`selected vendor reset`);
    console.log(vendorNameInput.value);

    // pop-up
    orderPlacedMemo.style.display = "block";
    setTimeout(function () {
      orderPlacedMemo.style.display = "none";
    }, 3000);
  }
  resetDelivery() {
    console.log(`reset delivery`);

    const estDeliveryDateInput = document.querySelector(
      ".estimated-delivery-date-input"
    );

    this.#selectedVendor = null;
    //vendorNameInput.innerHTML = "";
    addedItemsCont.innerHTML = "";
    vendorItemsCont.innerHTML = "";
    orderedItemsStatsCont.innerHTML = "";
    estDeliveryDateInput.value = "";

    addItemsDeliveryButton.style.pointerEvents = "auto";
    addItemsDeliveryButton.style.opacity = "1";
  }
  addOrdersToDOM(order) {
    //console.log(order);
    const html = `
    <div class="orders-row-content font-reg grid" data-id="${
      order.uniqueOrderCode
    }">
      <p class="vendor-name">${order.name}</p>
      <p class="invoice">${order.invoice}</p>
      <p class="order-qty">${order.qty}</p>
      <p class="order-cost">$${order.costTotal.toFixed(2)}</p>
      <p class="paid-status">${order.paidStatus}</p>
      <p class="delivery-date">${order.deliveryDate}</p>
      <div class="ellipsis-container">
      <i class="fas fa-ellipsis-h_${order.uniqueOrderCode} fa-ellipsis-h"></i>
    </div>
    <div class="order-actions">
        <i class="fas fa-edit edit-order-button_${
          order.uniqueOrderCode
        } edit-button" aria-hidden="true"></i>
        <i class="fas fa-trash delete-order-button_${
          order.uniqueOrderCode
        } delete-button" aria-hidden="true"></i>
        <i class="fas fa-truck-loading receive-order-button_${
          order.uniqueOrderCode
        } receive-button"></i>
      </div>
      <div class="order-actions_compact_${
        order.uniqueOrderCode
      } order-actions_compact">
        <i class="fas fa-edit edit-order-button_${
          order.uniqueOrderCode
        } edit-button" aria-hidden="true"></i>
        <i class="fas fa-trash delete-order-button_${
          order.uniqueOrderCode
        } delete-button" aria-hidden="true"></i>
        <i class="fas fa-truck-loading receive-order-button_${
          order.uniqueOrderCode
        } receive-button"></i>
      </div>
  </div>`;
    orderContent.insertAdjacentHTML("beforeend", html);

    const actionsCompactCont = document.querySelectorAll(
      `.order-actions_compact_${order.uniqueOrderCode}`
    );

    // RECEIVE ORDER //////////////
    const receiveOrderButton = document.querySelectorAll(
      `.receive-order-button_${order.uniqueOrderCode}`
    );
    for (const each of receiveOrderButton) {
      each.addEventListener(
        "click",
        this.openReceiveOrderPage.bind(this, order)
      );
    }

    // DELETE ORDER ////////////////
    // had issues placing in own method
    const deleteOrderButton = document.querySelector(
      `.delete-order-button_${order.uniqueOrderCode}`
    );

    deleteOrderButton.addEventListener("click", () => {
      const getDataIDFromHTML = deleteOrderButton
        .closest(`.orders-row-content`)
        .getAttribute("data-id");

      const orderContentChildren = orderContent.children;

      // remove from inventory array
      this.#orders = this.#orders.filter(function (item) {
        console.log(item);
        return item.uniqueOrderCode !== Number(getDataIDFromHTML);
      });

      //remove dom element
      for (const element of orderContentChildren) {
        if (element.getAttribute("data-id") === getDataIDFromHTML) {
          element.remove();
          // remove local storage
          // parse, use slice to remove specific item, stringify again
        }
      }
      this.setLocalStorage();
      // update calendar
      console.log(this.#orders);
    });

    // Mobile View
    const ellipsisButton = document.querySelectorAll(
      `.fa-ellipsis-h_${order.uniqueOrderCode}`
    );

    for (const each of ellipsisButton) {
      each.addEventListener("click", () => {
        const actionsModul = document.querySelectorAll(
          `.order-actions_compact_${order.uniqueOrderCode}`
        );

        this.ellipsisButtonTracker++;
        if (this.ellipsisButtonTracker === 1) {
          for (const one of actionsModul) {
            one.style.display = "block";
          }
          this.ellipsisButtonTracker = 2;
        } else {
          for (const one of actionsCompactCont) {
            one.style.display = "none";
          }
          this.ellipsisButtonTracker = 0;
        }
      });
    }

    for (const item of actionsCompactCont) {
      item.style.display = "none";
    }
  }
  toggleViewPastOrders() {
    // TOGGLE PAST ORDERS VIEW
    if (this.pastOrdersView) {
      this.pastOrdersView = false;
      pastOrderContainer.style.display = "none";
    } else {
      this.pastOrdersView = true;
      pastOrderContainer.style.display = "block";
    }
  }
  openReceiveOrderPage(order) {
    const itemsInOrder = order.items;
    const newArr = [];

    manageOrder.style.display = "none";
    receiveOrderContainer.style.display = "block";

    // ADD DOM
    const html = `
    <h1 class="receive-order_header">Receive Order</h1>
    <div class="parent">
    <div class="receive-stats">
      <p class="dd-tag tag">vendor</p>
      <p class="vendor-name_receive-order dd-value">${order.name}</p>
    </div>
    <div class="receive-stats">
      <p class="dd-tag tag">invoice</p>
      <p class="invoice_receive-order dd-value">${order.invoice}</p>
    </div>
    <div class="receive-stats">
      <p class="dd-tag tag">actual delivery date</p>
      <input type="text" placeholder="mm/dd/yyyy" class="dd_receive-order dd-value"></input>
    </div>
    </div>
    <div class="ordered-items_receive-order">
      <div class="ordered-items-child">
        <div class="ordered-items-header">
          <p>Name</p>
          <p>Cost</p>
          <p>Quantity</p>
        </div>
        <div class="items-on-order"></div>
      </div></div>
    <div class="receive-order-button-container">
      <button class="final-receive-order-button">Receive</button>
      <button class="cancel-receive-order-button">Cancel</button>
    </div>`;
    receiveOrderContainer.insertAdjacentHTML("beforeend", html);

    const orderedItemsReceive = document.querySelector(".items-on-order");
    const finalizedOrderButton = document.querySelector(
      ".final-receive-order-button"
    );

    for (const item of itemsInOrder) {
      const html2 = `
          <div class="received-items receive-order-row-container" data-id="${item.upc}">
            <p class="name_${item.upc} name">${item.name}</p>
            <p class="cost_${item.upc} cost">${item.cost}</p>
            <input class="receive-quantity_${item.upc} qty" type="number" value="${item.qty}" />
          </div>`;
      orderedItemsReceive.insertAdjacentHTML("beforeend", html2);
    }

    // RECEIVE ORDER
    finalizedOrderButton.addEventListener("click", () => {
      const actualDeliveryDateInput =
        document.querySelector(".dd_receive-order").value;

      const allItems = document.querySelectorAll(".received-items");
      console.log([...allItems]);

      for (const every of [...allItems]) {
        const dataID = every.getAttribute("data-id");
        // cost, date, items, and total qty
        const itemName = document.querySelector(`.name_${dataID}`).textContent;
        const itemCost = document.querySelector(`.cost_${dataID}`).textContent;
        const itemQty = document.querySelector(
          `.receive-quantity_${dataID}`
        ).value;

        //order.items = [];
        order.arrived = true;
        const updatedOrder = new newItemForOrder(
          itemName,
          Number(itemQty),
          dataID,
          Number(itemCost),
          order.name
        );
        newArr.push(updatedOrder);
      }

      order.items = newArr;
      order.deliveryDate = actualDeliveryDateInput;
      inventoryContentPar.innerHTML = "";

      // add order's items to inventory array & update order total
      order.qty = 0;

      let itemsToBeAddedArr = [];

      for (const item of order.items) {
        console.log("Ordered Item:");
        console.log(item);
        if (this.#inventory.length > 0) {
          this.itemExists = false;
          for (const inv of this.#inventory) {
            console.log("Searching inv:");
            console.log(inv);
            //checks if item already exists in inv
            if (inv.upc === item.upc) {
              inv.qty = inv.qty + item.qty;
              this.itemExists = true;
              console.log("item already exists qty added");
              break;
            }
          }
          if (this.itemExists === false) {
            itemsToBeAddedArr.push(item);
            console.log("item does NOT exist, whole item to be pushed to inv");
          }
        } else {
          console.log("inventory less than 0");
          this.#inventory.push(item);
        }
        order.qty = order.qty + item.qty;
      }

      /*
      for (const item of order.items) {
        console.log(item);
        if (this.#inventory.length > 0) {
          for (const inv of this.#inventory) {
            console.log(inv);
            //checks if item already exists in inv
            if (inv.upc === item.upc) {
              inv.qty = inv.qty + item.qty;
              console.log("item already exists qty added");
              continue;
            } else {
              itemsToBeAddedArr.push(item);
              console.log(
                "item does NOT exist, whole item to be pushed to inv"
              );
            }
          }
        } else {
          console.log("inventory less than 0");
          this.#inventory.push(item);
        }
        order.qty = order.qty + item.qty;
      } */

      // move items to be added to this.#inventory - had to do this step to avoid bug (for loop was over looping, adding extra inv)
      for (const product of itemsToBeAddedArr) {
        this.#inventory.push(product);
      }
      itemsToBeAddedArr = [];
      console.log("itemsToBeAddedArr:");
      console.log(itemsToBeAddedArr);
      console.log("inventoryArr:");
      console.log(this.#inventory);
      // sort inventory array so they appear in dom alphabetically
      this.sortInventoryByNameWhenReceiving();
      // add inventory to dom
      for (const item of this.#inventory) {
        this.addInventoryToDOM(item);
      }
      // add order to past orders array
      this.#pastOrders.push(order);

      // remove order from orders arr
      let temporaryArr = [];
      temporaryArr = this.#orders.filter((item) => {
        return !item.arrived;
      });
      this.#orders = temporaryArr;

      // remove order from upcoming orders dom
      for (const item of [...orderContent.children]) {
        if (item.getAttribute("data-id") == order.uniqueOrderCode) {
          item.remove();
        }
      }

      this.setLocalStorage();
      this.updateInventoryQuantity();
      this.addOrderToPastOrdersDOM(order);
      this.updateDashboard();

      receiveOrderContainer.style.display = "none";
      manageOrder.style.display = "block";

      orderReceivedMemo.style.display = "block";
      setTimeout(function () {
        orderReceivedMemo.style.display = "none";
      }, 3000);
    });

    // CANCEL RECEIVE ORDER
    const cancelReceiveButton = document.querySelector(
      ".cancel-receive-order-button"
    );
    const yesCancelReceive = document.querySelector(".confirm-cancel_button");
    const noCancelReceive = document.querySelector(".deny-cancel_button");

    cancelReceiveButton.addEventListener("click", () => {
      confirmCancelReceiveModul.style.display = "block";
    });

    yesCancelReceive.addEventListener("click", () => {
      manageOrder.style.display = "block";
      receiveOrderContainer.style.display = "none";
      receiveOrderContainer.innerHTML = "";
      confirmCancelReceiveModul.style.display = "none";
    });
    noCancelReceive.addEventListener("click", () => {
      confirmCancelReceiveModul.style.display = "none";
    });
  }
  addOrderToPastOrdersDOM(order) {
    const html = `
    <div class="orders-row-content" data-id="${order.uniqueOrderCode}">
      <p class="vendor-name">${order.name}</p>
      <p class="invoice">${order.invoice}</p>
      <p class="order-qty">${order.qty}</p>
      <p class="order-cost">$${order.costTotal.toFixed(2)}</p>
      <p class="paid-status">${order.paidStatus}</p>
      <p class="delivery-date">${order.deliveryDate}</p>
  </div>`;
    pastOrderContent.insertAdjacentHTML("beforeend", html);
  }
  clearPastOrders() {
    deletePastOrdesMemo.style.display = "block";

    const yesClearPastOrdersButton = document.querySelector(
      ".yes-confirm-delete-pastorders"
    );
    const denyClearPastOrdersButton = document.querySelector(
      ".no-confirm-delete-pastorders"
    );

    yesClearPastOrdersButton.addEventListener("click", () => {
      this.#pastOrders = [];
      localStorage.removeItem("pastOrders");
      pastOrderContent.innerHTML = "";
      deletePastOrdesMemo.style.display = "none";
    });
    denyClearPastOrdersButton.addEventListener("click", () => {
      deletePastOrdesMemo.style.display = "none";
    });
  }
  addVendor() {
    const vendorNameInputVal =
      document.querySelector(".vendor-name-input").value;

    if (vendorNameInputVal.length < 1) return;

    this.uniqueVendorCode = this.uniqueVendorCode + 1;

    const vendorInst = new newVendor(vendorNameInputVal, this.uniqueVendorCode);

    this.#vendors.push(vendorInst);

    console.log(this.#vendors);

    addVendorModul.style.display = "none";

    this.setLocalStorage();
    this.sortVendorsByName();
    // PLACE VENDORS IN SEPARATE TEMP ARRAY, POST TO DOM FROM THAY ARRAY
    this.addVendorToDOM(vendorInst);
  }
  addVendorToDOM(vendor) {
    const html = `
    <div class="new-store-container new-store-container_${vendor.uniqueVendorCode}">
    <div class="new-store-header">
      <h1 class="new-store-number">${vendor.name}</h1>
    </div>
    <div class="vendor-more-info_${vendor.uniqueVendorCode} more-info" data-id="${vendor.uniqueVendorCode}">More Info</div>
    </div>`;

    vendorGrid.insertAdjacentHTML("beforeend", html);

    const vendorMoreInfo = document.querySelector(
      `.vendor-more-info_${vendor.uniqueVendorCode}`
    );

    vendorMoreInfo.addEventListener("click", (e) => {
      this.#vendors.forEach((vendor) => {
        if (
          vendor.uniqueVendorCode === Number(e.target.getAttribute("data-id"))
        ) {
          this.openVendorPortfolio(vendor);
          return;
        }
      });
    });
  }
  clearVendors() {
    this.#vendors = [];
    localStorage.removeItem("vendors");
    vendorGrid.innerHTML = "";
  }
  openVendorPortfolio(vendor) {
    vendorContainer.style.display = "none";
    vendorPortfolio.style.display = "block";
    portfolioContent.innerHTML = "";
    this.purgatoryForOrderedItems = [];
    let orderedItem;
    console.log(vendor);

    const vendorHeader = document.querySelector(
      ".vendor-portfolio-header-cont"
    );
    vendorHeader.innerHTML = `<h1 class="vendor-name-header">${vendor.name}</h1>`;

    const html = `<button class="save-portfolio-changes_${vendor.uniqueVendorCode} save-portfolio-changes">Save</button>`;
    vendorPortButtonsCont.insertAdjacentHTML("beforeend", html);

    const savePortfolioChangesButton = document.querySelector(
      `.save-portfolio-changes_${vendor.uniqueVendorCode}`
    );

    /*
    const confirmAddItemPortfolioButton = document.querySelector(
      ".confirm-add-item-portfolio-button"
    );*/

    if (vendor.items) {
      for (const item of vendor.items) {
        this.addItemToPortfolioDOM(item, vendor);
      }
    }

    addItemToPortfolioButton.addEventListener("click", () => {
      addItemToPortfolioModul.style.display = "block";

      const portfolioButtonCont = document.querySelector(
        ".add-item-portfolio-button-cont"
      );

      portfolioButtonCont.innerHTML = `
          <button class="modul-button confirm-add-item-portfolio-button_${vendor.uniqueVendorCode}">Add</button>
          <button class="confirm-close-item-portfolio-button modul-button">Close</button>`;

      const confirmAddItemPortfolioButton = document.querySelector(
        `.confirm-add-item-portfolio-button_${vendor.uniqueVendorCode}`
      );
      const confirmCloseItemPortfolioButton = document.querySelector(
        ".confirm-close-item-portfolio-button"
      );

      confirmAddItemPortfolioButton.addEventListener("click", () => {
        orderedItem = new newItemForVendor(
          itemNameInput.value,
          itemCostInput.value,
          itemUpcInput.value
        );

        this.purgatoryForOrderedItems.push(orderedItem);
        console.log(this.purgatoryForOrderedItems);

        this.addItemToPortfolioDOM(orderedItem);

        addItemToPortfolioModul.style.display = "none";
        itemNameInput.value = "";
        itemCostInput.value = "";
        itemUpcInput.value = "";

        vendorPortButtonsCont.style.pointerEvents = "auto";
        vendorPortButtonsCont.style.opacity = "100";
        portfolioButtonCont.innerHTML = "";
      });

      confirmCloseItemPortfolioButton.addEventListener("click", () => {
        vendorPortButtonsCont.innerHTML = "";
        //addItemToPortfolioCont.innerHTML = "";
        addItemToPortfolioModul.style.display = "none";
        portfolioButtonCont.innerHTML = "";
        vendorHeader.innerHTML = "";
      });
    });

    // BUG: when saving changes to one, blanks will show for others. savePortfolioChangesButton
    // is for all of the save buttons not just one

    savePortfolioChangesButton.addEventListener("click", () => {
      if (orderedItem.name || orderedItem.cost || orderedItem.upc) {
        for (const item of this.purgatoryForOrderedItems) {
          vendor.items.push(item);
        }
        console.log(vendor);
        vendorPortButtonsCont.style.pointerEvents = "none";
        vendorPortButtonsCont.style.opacity = "0.5";
        this.setLocalStorage();
      }
      this.purgatoryForOrderedItems = [];
    });
  }
  addItemToPortfolioDOM(item, vendor) {
    const html = `
        <div class="portfolio-item_${item.upc} portfolio-item" data-id="${item.upc}">
          <p class="portfolio-item_name_${item.upc}">${item.name}</p>
          <p class="portfolio-item_cost_${item.upc}">${item.cost}</p>
          <p class="portfolio-item_upc_${item.upc}">${item.upc}</p>
          <i class="fas fa-trash delete-item-button_${item.upc} delete-button" aria-hidden="true"></i>
        </div>`;
    portfolioContent.insertAdjacentHTML("beforeend", html);

    // DELETE ITEM FROM PORTFOLIO
    //
    const deleteButton = document.querySelector(
      `.delete-item-button_${item.upc}`
    );

    deleteButton.addEventListener("click", () => {
      vendor.items = vendor.items.filter((each) => {
        return each.upc !== item.upc;
      });

      const vendorPortChildren = document.querySelector(
        ".vendor-portfolio-content"
      );

      //remove dom element
      for (const element of vendorPortChildren.children) {
        if (element.getAttribute("data-id") === item.upc) {
          element.remove();
        }
      }
      this.setLocalStorage();
    });
  }
  openCompactSideBar() {
    this.compactSidebarTracker++;

    if (this.compactSidebarTracker === 1) {
      sidebarContainer.style.display = "block";
    } else {
      sidebarContainer.style.display = "none";
      this.compactSidebarTracker = 0;
    }
  }
}

const startUp = {
  init: () => {
    document.addEventListener("DOMContentLoaded", startUp.load);
  },
  load: () => {
    let page = document.body.id;

    switch (page) {
      case "signin":
        console.log("load signin logic");
        break;
      case "app":
        const master = new Master();
        master.signIn();
        break;
    }
  },
};

startUp.init();
