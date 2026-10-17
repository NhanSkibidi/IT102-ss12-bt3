
// 1. So sanh ky thuat
// Monolithic Switch-Case:
// - Code dai, kho doc va bao tri.
// - Kho tai su dung va kiem thu tung chuc nang.
// Modular Function:
// - Switch-case ngan gon, de doc.
// - De tai su dung, kiem thu va sua loi.
// 2. Code minh hoa
function addSubscription() {
  const name = prompt("Nhap ten khach hang:");
  console.log("Them thue bao: " + name);
}

function listSubscriptions() {
  console.log("Hien thi danh sach thue bao");
}

function updateSubscription() {
  console.log("Cap nhat goi cuoc");
}

function deleteSubscription() {
  console.log("Huy thue bao");
}

function main() {
  let choice;

  do {
    choice = Number(prompt(
      "1. Them thue bao\n" +
      "2. Xem danh sach\n" +
      "3. Cap nhat goi\n" +
      "4. Huy thue bao\n" +
      "5. Thoat"
    ));

    switch (choice) {
      case 1:
        addSubscription();
        break;
      case 2:
        listSubscriptions();
        break;
      case 3:
        updateSubscription();
        break;
      case 4:
        deleteSubscription();
        break;
      case 5:
        console.log("Thoat chuong trinh");
        break;
      default:
        console.log("Lua chon khong hop le");
    }
  } while (choice !== 5);
}

main();
