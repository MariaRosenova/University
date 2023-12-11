#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* link;
};

struct Node* top = NULL;

void push(int data) {
    // Create a new node
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));

    if (newNode == NULL) {
        printf("Stack Overflow\n");
        exit(1);
    }

    // Update the top pointer and make it point to the new node
    newNode->data = data;
    newNode->link = top;
    top = newNode;
}

void print() {
    struct Node* temp = top;
    printf("The stack elements are: ");

    while (temp) {
        printf("%d ", temp->data);
        temp = temp->link;
    }
    printf("\n");
}

int main() {
    int choice, data;

    while (1) {
        printf("1. Push\n");
        printf("2. Print\n");
        printf("3. Quit\n");
        printf("Enter your choice: ");

        // Initialize 'choice' before using it in the switch statement
        scanf("%d", &choice);

        switch (choice) {
        case 1:
            printf("Enter data to push: ");
            scanf("%d", &data);
            push(data);
            break;
        case 2:
            print();
            break;
        case 3:
            exit(0);
        default:
            printf("Wrong Choice\n");
            break;
        }
    }

    return 0;
}
